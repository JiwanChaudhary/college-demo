"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

type UpdatePackageProps = {
  params: any;
};

const UpdatePackage: React.FC<UpdatePackageProps> = ({ params }) => {
  const router = useRouter();
  const updatePackage = params._id;

  // create state for package details
  const [newPackageDetails, setNewPackageDetails] = React.useState<any>({
    name: params?.name,
    description: params?.description,
    basePrice: params?.basePrice,
    numberOfPeopleForBasePrice: params?.numberOfPeopleForBasePrice,
    capacity: params?.capacity,
    additionalPricePerPerson: params?.additionalPricePerPerson,
    servicesIncluded: params?.servicesIncluded,
  }); // package details

  // handle package change
  const handlePackageChange = (e: any) => {
    let { name, value } = e.target;
    setNewPackageDetails({ ...newPackageDetails, [name]: value });
  };

  //   handleUpdatePackage
  const handleUpdatePackage = async (e: any) => {
    e.preventDefault();
    try {
      await axios.put(`/api/${updatePackage}`, { newPackageDetails });
      alert("package updated");
      router.push("/my-venue");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* update package */}
      <section>
        <form onSubmit={handleUpdatePackage}>
          {/* name */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newPackageDetails.name}
              onChange={handlePackageChange}
            />
          </div>
          {/* description */}
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={newPackageDetails.description}
              onChange={handlePackageChange}
            />
          </div>
          {/* basePrice */}
          <div>
            <label htmlFor="basePrice">Base Price</label>
            <input
              type="number"
              name="basePrice"
              id="basePrice"
              value={newPackageDetails.basePrice}
              onChange={handlePackageChange}
            />
          </div>
          {/* numberOfPeopleForBasePrice */}
          <div>
            <label htmlFor="numberOfPeopleForBasePrice">
              Number of People for Base Price
            </label>
            <input
              type="number"
              name="numberOfPeopleForBasePrice"
              id="numberOfPeopleForBasePrice"
              value={newPackageDetails.numberOfPeopleForBasePrice}
              onChange={handlePackageChange}
            />
          </div>
          {/* capacity */}
          <div>
            <label htmlFor="capacity">Capacity</label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              value={newPackageDetails.capacity}
              onChange={handlePackageChange}
            />
          </div>
          {/* additionalPricePerPerson */}
          <div>
            <label htmlFor="additionalPricePerPerson">
              Additional Price Per Person
            </label>
            <input
              type="number"
              name="additionalPricePerPerson"
              id="additionalPricePerPerson"
              value={newPackageDetails.additionalPricePerPerson}
              onChange={handlePackageChange}
            />
          </div>
          {/* servicesIncluded */}
          <div>
            <label htmlFor="servicesIncluded">Services Included</label>
            <input
              type="text"
              name="servicesIncluded"
              id="servicesIncluded"
              value={newPackageDetails.servicesIncluded}
              onChange={handlePackageChange}
            />
          </div>

          {/* submit button */}
          <button type="submit">Update Package</button>
        </form>
      </section>
    </>
  );
};

export default UpdatePackage;
