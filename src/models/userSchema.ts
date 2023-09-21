import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    role: {
      type: String,
      enum: ["user", "vendor", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
