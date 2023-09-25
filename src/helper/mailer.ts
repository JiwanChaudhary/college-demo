import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import User from "@/models/userSchema";

type UserDetails = {
  email: string;
  emailType: string;
  userId: string;
};

export const sendMail = async ({ email, emailType, userId }: UserDetails) => {
  try {
    // create token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    // nodemailer

    let transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: process.env.SMTP_PORT as unknown as number,
      secure: false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // verifyUser
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(
        userId,
        {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: "Verify Email",
        html: `
                <p>
                    Copy and paste the link below in your browser to verify your email.
                    <br/>
                    ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
                </p>
            `,
      };
      const mailResponse = await transport.sendMail(mailOptions);
      return mailResponse;
    }

    // resetPassword
    if (emailType === "RESET") {
      await User.findByIdAndUpdate(
        userId,
        {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 36000,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: "Reset Your Password",
        html: `
                <p>
                    Copy and paste the link below in your browser to reset your password.
                    <br/>
                    ${process.env.DOMAIN}/resetpasswordform?token=${hashedToken}
                </p>
            `,
      };
      const mailResponse = await transport.sendMail(mailOptions);
      return mailResponse;
    }
  } catch (error) {
    console.log("error" + error);
  }
};
