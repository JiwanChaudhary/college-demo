"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

const UploadImage = () => {
  const router = useRouter();
  const [image, setImage] = React.useState<any>();

  const handleImageSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post(`/api/venue/uploadImage`, { image });
      // console.log(response);
      alert("Image uploaded successfully");
      router.push("/my-venue");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      style={{ height: "80vh", padding: "20px 60px", textAlign: "center" }}
    >
      <h1 style={{ marginBottom: "20px" }}>Please enter the image URL</h1>
      <form onSubmit={handleImageSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="image"
          // accept=".jpeg, .jpg, .png"
          onChange={(e: any) => setImage(e.target.value)}
        />
        <button type="submit" style={{ cursor: "pointer" }}>
          Upload
        </button>
      </form>
      {/* preview image section
      {image && (
        <Image
          src={URL.createObjectURL(image)}
          alt="image"
          height={250}
          width={350}
          style={{ marginTop: "20px" }}
        />
      )} */}
    </section>
  );
};

export default UploadImage;
