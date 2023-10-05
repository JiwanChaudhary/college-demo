"use client";

import axios from "axios";
import Image from "next/image";
import * as React from "react";

const UploadImage = () => {
  const [image, setImage] = React.useState<any>();

  // handleImageChange
  const handleImageChange = async (e: any) => {
    // const file = e.target.files[0];
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  // console.log(image);

  const handleImageSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post(`/api/venue/uploadImage`, {
        formData,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      style={{ height: "80vh", padding: "20px 60px", textAlign: "center" }}
    >
      <h1 style={{ marginBottom: "20px" }}>Upload Image</h1>
      <form onSubmit={handleImageSubmit} encType="multipart/form-data">
        <input
          type="file"
          name="image"
          accept=".jpeg, .jpg, .png"
          onChange={handleImageChange}
        />
        <button type="submit" style={{ cursor: "pointer" }}>
          Upload
        </button>
      </form>
      {/* preview image section */}
      {image && (
        <Image
          src={URL.createObjectURL(image)}
          alt="image"
          height={250}
          width={350}
          style={{ marginTop: "20px" }}
        />
      )}
    </section>
  );
};

export default UploadImage;
