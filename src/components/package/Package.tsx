"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

type EventPackage = {
  name: string;
  description: string;
  basePrice: number;
  numberOfPeopleForBasePrice: number;
  capacity: number;
  additionalPricePerPerson: number;
  servicesIncluded: string;
};

const Package = () => {
  const router = useRouter();
  const [eventPackage, setEventPackage] = React.useState<
    EventPackage | null | any
  >({
    name: "",
    description: "",
    basePrice: null,
    numberOfPeopleForBasePrice: null,
    capacity: null,
    additionalPricePerPerson: null,
    servicesIncluded: "",
  });

  //   handle Change Package
  const handlePackageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    setEventPackage({ ...eventPackage, [name]: value });
  };

  // handle create package
  const handlePackageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(eventPackage);
    try {
      await axios.post(`/api/package`, { eventPackage });
      alert("Package created successfully");
      setEventPackage("");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section style={{ margin: "10px auto" }}>
      <main style={{ background: "#000", color: "#fff", padding: "10px 15px" }}>
        <h1 style={{ margin: "5px 0" }}>Create Package</h1>
        <form onSubmit={handlePackageSubmit}>
          {/* name */}
          <div>
            <label htmlFor="name">Package Name</label>
            <input
              type="text"
              value={eventPackage?.name}
              name="name"
              id="name"
              onChange={handlePackageChange}
              required
              placeholder="Package Name"
            />
          </div>
          {/* description */}
          <div>
            <label htmlFor="description">Description of the package</label>
            <input
              type="text"
              value={eventPackage?.description}
              name="description"
              id="description"
              onChange={handlePackageChange}
              required
              placeholder="Description"
            />
          </div>
          {/* basePrice */}
          <div>
            <label htmlFor="basePrice">
              What is the base price of the package?
            </label>
            <input
              type="number"
              value={eventPackage?.basePrice}
              name="basePrice"
              id="basePrice"
              onChange={handlePackageChange}
              required
              placeholder="Base Price"
            />
          </div>
          {/*  numberOfPeopleForBasePrice*/}
          <div>
            <label htmlFor="numberOfPeopleForBasePrice">
              What is the number of people that can enjoy at the base price?
            </label>
            <input
              type="number"
              value={eventPackage?.numberOfPeopleForBasePrice}
              name="numberOfPeopleForBasePrice"
              id="numberOfPeopleForBasePrice"
              onChange={handlePackageChange}
              required
              placeholder="Number of People For Base Price"
            />
          </div>
          {/*capacity  */}
          <div>
            <label htmlFor="capacity">
              What is the maximum number of people that can enjoy the package?
            </label>
            <input
              type="number"
              value={eventPackage?.capacity}
              name="capacity"
              id="capacity"
              onChange={handlePackageChange}
              required
              placeholder="Capacity"
            />
          </div>
          {/* additionalPricePerPerson */}
          <div>
            <label htmlFor="additionalPricePerPerson">
              Additional price per person
            </label>
            <input
              type="number"
              value={eventPackage?.additionalPricePerPerson}
              name="additionalPricePerPerson"
              id="additionalPricePerPerson"
              onChange={handlePackageChange}
              required
              placeholder="Additional Price per person"
            />
          </div>
          {/* servicesIncluded */}
          <div>
            <label htmlFor="servicesIncluded">
              What are the services included?
            </label>
            <input
              type="text"
              value={eventPackage?.servicesIncluded}
              name="servicesIncluded"
              id="servicesIncluded"
              onChange={handlePackageChange}
              required
              placeholder="Services Included"
            />
          </div>
          {/* create package button */}
          <button type="submit">Create Package</button>
        </form>
      </main>
    </section>
  );
};

export default Package;
