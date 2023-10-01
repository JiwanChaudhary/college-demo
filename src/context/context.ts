// "use client";

// import { useState, useContext, createContext } from "react";

// type DateAndTime = {
//   fromDateTime: Date | undefined;
//   setFromDateTime: (fromDateTime: Date) => void;
//   toDateTime: Date | undefined;
//   setToDateTime: (toDateTime: Date) => void;
// };

// export const VenueContext = createContext<DateAndTime>({
//   fromDateTime: undefined,
//   setFromDateTime: () => {},
//   toDateTime: undefined,
//   setToDateTime: () => {},
// });

// export const VenueProvider = ({ children }: any) => {
//   const [fromDateTime, setFromDateTime] = useState<any>();
//   const [toDateTime, setToDateTime] = useState<any>();

//   const VenueValue = {
//     fromDateTime,
//     setFromDateTime,
//     toDateTime,
//     setToDateTime,
//   };

//   return (
//     <VenueContext.Provider value={VenueValue}>{children}</VenueContext.Provider>
//   );
// };

// export const useRoomContext = () => useContext(VenueContext);
