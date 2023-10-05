import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

type UpdateVenueProps = {
  params: any;
};

const UpdateVenue: React.FC<UpdateVenueProps> = ({ params }) => {
  // console.log(params);
  const router = useRouter();

  const [newVenueDetails, setNewVenueDetails] = React.useState<any>({
    venueName: params?.venueName,
    address: params?.address,
    maxCapacity: params?.maxCapacity,
    description: params?.description,
    rentalFee: params?.rentalFee,
    phone: params?.phone,
    email: params?.email,
    tags: params?.tags,
  });
  //   console.log(newVenueDetails);

  // update venue handle change
  const handleUpdateChange = (e: any) => {
    let { name, value } = e.target;
    setNewVenueDetails({ ...newVenueDetails, [name]: value });
  };

  // update venue
  const handleVenueUpdate = async (e: any) => {
    e.preventDefault();

    try {
      await axios.put(`/api/venue/updateVenue`, { newVenueDetails });
      alert("venue updated");
      router.push("/my-venue");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Update Venue</h1>
      {/* form to update venue details */}
      <form onSubmit={handleVenueUpdate}>
        {/* venue Name */}
        <div>
          <label htmlFor="venueName">Venue Name</label>
          <input
            type="text"
            name="venueName"
            value={newVenueDetails.venueName}
            onChange={handleUpdateChange}
          />
        </div>
        {/* address */}
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={newVenueDetails.address}
            onChange={handleUpdateChange}
          />
        </div>
        {/* maxCapacity */}
        <div>
          <label htmlFor="maxCapacity">Max Capacity</label>
          <input
            type="number"
            name="maxCapacity"
            value={newVenueDetails.maxCapacity}
            onChange={handleUpdateChange}
          />
        </div>
        {/* description */}
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={newVenueDetails.description}
            onChange={handleUpdateChange}
          />
        </div>
        {/* rentalFee */}
        <div>
          <label htmlFor="rentalFee">Rental Fee</label>
          <input
            type="number"
            name="rentalFee"
            value={newVenueDetails.rentalFee}
            onChange={handleUpdateChange}
          />
        </div>
        {/* phone */}
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={newVenueDetails.phone}
            onChange={handleUpdateChange}
          />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={newVenueDetails.email}
            onChange={handleUpdateChange}
          />
        </div>
        {/* tags */}
        <div>
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            name="tags"
            value={newVenueDetails.tags}
            onChange={handleUpdateChange}
          />
        </div>

        {/* submit button */}
        <div>
          <button type="submit">Update Venue</button>
        </div>
      </form>
    </section>
  );
};

export default UpdateVenue;
