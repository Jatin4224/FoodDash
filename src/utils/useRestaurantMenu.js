// import { useEffect, useState } from "react";
// import { MENU_API } from "./constants";
// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(MENU_API + resId);
//     const json = await data.json();
//     setResInfo(json);
//   };
//   return resInfo;
// };

// export default useRestaurantMenu;
// src/utils/useRestaurantMenu.js

// import { useState, useEffect } from "react";
// import { MENU_API } from "./constants";

// export const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [resId]);

//   const fetchData = async () => {
//     try {
//       const data = await fetch(MENU_API + resId);
//       const json = await data.json();
//       setResInfo(json.data);
//     } catch (error) {
//       console.error("Error fetching restaurant menu:", error);
//     }
//   };

//   return resInfo;
// };
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
