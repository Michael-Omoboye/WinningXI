import React, { useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export const Matches = () => {
    const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://transfermarket.p.rapidapi.com/competitions/get-table",
          params: {
            id: "GB1",
            seasonID: "2023",
            domain: "de",
          },
          headers: {
            "X-RapidAPI-Key":
              "fc6d37421fmsh1063f0ca2854726p107fecjsn9c5340af29ad",
            "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
          },
        };
  
        try {
          const response = await axios.request(options);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <>
      <h1>Todays Games</h1>
      
    </>
  );
};
