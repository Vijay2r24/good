
// import React, { createContext, useState } from 'react';
// import {GETALLCUSTOMERSBYID_API} from "../Constants/apiRoutes"
// // Create the context
// export const CustomerContext = createContext();

// // Provider component
// export const CustomerProvider = ({ children }) => {
//   const [customerDetails, setCustomerDetails] = useState(null);

//   // Function to fetch customer data by ID using the JWT token
//   const getCustomerById = async (customerId) => {
//     console.log(customerId);
//     const token = localStorage.getItem('jwtToken');

//     if (!token) {
//       console.error('JWT token is missing');
//       return;
//     }

//     try {
//       const response = await fetch(
//         // `https://imlystudios-backend-mqg4.onrender.com/api/getCustomerbyId/${customerId}`, 
//         `${GETALLCUSTOMERSBYID_API}/${customerId}`,
//         {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,  // Include the JWT token in the Authorization header
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch customer details');
//       }

//       const data = await response.json();
//       console.log('Fetched Customer Details:', data);

//       setCustomerDetails(data);  // Set fetched data into the context state
//       return data;
//     } catch (error) {
//       console.error('Error fetching customer details:', error);
//       throw error;
//     }
//   };

//   return (
//     <CustomerContext.Provider value={{ customerDetails, setCustomerDetails, getCustomerById }}>
//       {children}
//     </CustomerContext.Provider>
//   );
// };

// import React, { createContext, useState } from 'react';
// import {CUSTOMERID_API,ADDRESS_API} from "../Constants/apiRoutes"
// // Create the context
// export const CustomerContext = createContext();

// // Provider component
// export const CustomerProvider = ({ children }) => {
//   const [customerDetails, setCustomerDetails] = useState(null);
//   const [addressDetails, setAddressDetails] = useState(null);
//   // Function to fetch customer data by ID using the JWT token
//   const getCustomerById = async (customerId) => {
//     console.log(customerId);
//     const token = localStorage.getItem('jwtToken');

//     if (!token) {
//       console.error('JWT token is missing');
//       return;
//     }

//     try {
//       const response = await fetch(
//         // `https://imlystudios-backend-mqg4.onrender.com/api/getCustomerbyId/${customerId}`, 
//         `${CUSTOMERID_API}/${customerId}`,
//         {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,  
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch customer details');
//       }

//       const data = await response.json();
//       console.log('Fetched Customer Details:', data);

//       setCustomerDetails(data);  // Set fetched data into the context state
//       return data;
//     } catch (error) {
//       console.error('Error fetching customer details:', error);
//       throw error;
//     }
//   };

//   return (
//     <CustomerContext.Provider value={{ customerDetails, setCustomerDetails,setAddressDetails,addressDetails, getCustomerById }}>
//       {children}
//     </CustomerContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';
import { CUSTOMERID_API, ADDRESS_API } from "../Constants/apiRoutes";

// Create the context
export const CustomerContext = createContext();

// Provider component
export const CustomerProvider = ({ children }) => {
  const [customerDetails, setCustomerDetails] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);

  // Function to fetch customer data by ID using the JWT token
  const getCustomerById = async (customerId) => {
    console.log(customerId);
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      console.error('JWT token is missing');
      return;
    }

    try {
      const response = await fetch(
        `${CUSTOMERID_API}/${customerId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch customer details');
      }

      const data = await response.json();
      console.log('Fetched Customer Details:', data);

      setCustomerDetails(data);  // Set fetched data into the context state
      return data;
    } catch (error) {
      console.error('Error fetching customer details:', error);
      throw error;
    }
  };

  // Function to fetch address data by Customer ID using the JWT token
  const getAddressByCustomerId = async (customerId) => {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      console.error('JWT token is missing');
      return;
    }

    try {
      const response = await fetch(
        `${ADDRESS_API}/${customerId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch address details');
      }

      const data = await response.json();
      console.log('Fetched Address Details:', data);

      setAddressDetails(data); // Set fetched address data into the context state
      return data;
    } catch (error) {
      console.error('Error fetching address details:', error);
      throw error;
    }
  };

  return (
    <CustomerContext.Provider value={{ customerDetails, setCustomerDetails, setAddressDetails, addressDetails, getCustomerById, getAddressByCustomerId }}>
      {children}
    </CustomerContext.Provider>
  );
};