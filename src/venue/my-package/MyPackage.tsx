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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 20px",
            }}
          >
            {/* my-package and create new package */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>My Packages:</h2>
              <button
                type="submit"
                style={{ padding: "5px 8px", cursor: "pointer" }}
              >
                Create New Package
              </button>
            </div>
            <hr
              style={{
                margin: "5px 0",
                background: "#fff",
                height: "2px",
                color: "#fff",
                width: "100%",
              }}
            />
            {venuePackages.length ? (
              <div>
                {venuePackages.map((venuePackage: any) => (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* package */}
                      <div>
                        <h4>Package Name: {venuePackage.name}</h4>
                        <p>Description: {venuePackage.description}</p>
                        <p>
                          Base Price for Package: Rs.{venuePackage.basePrice}
                        </p>
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
                      </div>
                      {/* update package */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          type="submit"
                          style={{
                            padding: "5px 8px",
                            cursor: "pointer",
                            marginRight: "10px",
                            height: "30px",
                          }}
                        >
                          Update
                        </button>
                        <button
                          type="submit"
                          style={{
                            padding: "5px 8px",
                            cursor: "pointer",
                            height: "30px",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <hr style={{ margin: "10px 0" }} />
                  </>
                ))}
              </div>
            ) : (
              <div>
                <h4>No packages yet</h4>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MyPackage;
