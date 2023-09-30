"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

const VendorDetailsForm = () => {

  const router = useRouter();

  const [vendorDetails, setVendorDetails] = React.useState<any>({
    venueName: "",
    address: "",
    maxCapacity: "",
    rentalFee: "",
    email: "",
  });

  const [description, setDescription] = React.useState<any>("");
  // const [phone, setPhone] = React.useState("");
  const [tags, setTags] = React.useState<any>([]);
  const [phone, setPhone] = React.useState<any>([]);

  // handleVendorDetails
  const handleVendorDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(vendorDetails);
    let { name, value } = e.target;

    setVendorDetails({
      ...vendorDetails,
      [name]: value,
    });
  };

  // let newTags = [];

  // handleFormSubmit
  const handleFormSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      await axios.post(`/api/venue/venueDetails`, {
        vendorDetails,
        description,
        tags,
        phone,
      });
      alert("Data successfulyy sent");
      router.refresh();
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* venue Name */}
        <div>
          <label htmlFor="venueName">Venue Name</label>
          <input
            type="text"
            required
            name="venueName"
            placeholder="Enter venue name"
            id="venueName"
            value={vendorDetails?.venueName}
            onChange={handleVendorDetails}
          />
        </div>
        {/* address */}
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            name="address"
            placeholder="Enter venue address"
            id="address"
            value={vendorDetails?.address}
            onChange={handleVendorDetails}
          />
        </div>
        {/* maxCapacity */}
        <div>
          <label htmlFor="maxCapacity">maxCapacity</label>
          <input
            type="number"
            required
            name="maxCapacity"
            placeholder="Enter venue capacity"
            id="maxCapacity"
            value={vendorDetails?.maxCapacity}
            onChange={handleVendorDetails}
          />
        </div>
        {/* description */}
        <div>
          <label htmlFor="description">description</label>
          <textarea
            required
            name="description"
            placeholder="Enter venue description"
            id="description"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />
        </div>
        {/* rentalFee */}
        <div>
          <label htmlFor="rentalFee">rentalFee</label>
          <input
            type="number"
            required
            name="rentalFee"
            placeholder="Enter venue rentalFee"
            id="rentalFee"
            value={vendorDetails?.rentalFee}
            onChange={handleVendorDetails}
          />
        </div>
        {/* phone */}
        <div>
          <label htmlFor="phone">phone number</label>
          <input
            multiple
            type="text"
            required
            name="phone"
            placeholder="Enter venue phone number"
            id="phone"
            value={phone.join(",")}
            onChange={(e) => setPhone(e.target.value.split(","))}
          />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Enter venue email"
            id="email"
            value={vendorDetails?.email}
            onChange={handleVendorDetails}
          />
        </div>
        {/* tags */}
        <div>
          <label htmlFor="tags">tags</label>
          <input
            multiple
            type="text"
            required
            name="tags"
            placeholder="Enter venue tags"
            id="tags"
            value={tags.join(",")}
            onChange={(e) => setTags(e.target.value.split(","))}
          />
        </div>
        {/* button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default VendorDetailsForm;
