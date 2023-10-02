"use client";

import axios from "axios";
import * as React from "react";

const MyPackage = () => {
  const [venuePackages, setVenuePackages] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  // get package details
  const getPackageDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/package`);
      // console.log(response.data.VenuePackages);
      setVenuePackages(response.data.VenuePackages);
      // yesle kaam garcha
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // call getPackageDetails function in useEffect
  React.useEffect(() => {
    getPackageDetails();
  }, []);

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <>
          <div>
            <h2>The packages are:</h2>
            <div>
              {venuePackages.map((venuePackage: any) => (
                <>
                  <h4>Package Name: {venuePackage.name}</h4>
                  <p>Description: {venuePackage.description}</p>
                  <p>Base Price for Package: Rs.{venuePackage.basePrice}</p>
                  <p>
                    Number of people for base price:{" "}
                    {venuePackage.numberOfPeopleForBasePrice}
                  </p>
                  <p>
                    Additional price per person: Rs.
                    {venuePackage.additionalPricePerPerson}
                  </p>
                  <p>Capacity for the package: {venuePackage.capacity}</p>
                  <p>
                    Services Included for the package:{" "}
                    {venuePackage.servicesIncluded}
                  </p>
                  <hr style={{ margin: "10px 0" }} />
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyPackage;
