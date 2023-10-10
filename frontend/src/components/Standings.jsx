import axios from "axios";
import React, { useEffect, useState } from "react";

export const Standings = () => {
  const [epl, setEpl] = useState([]);
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
        "X-RapidAPI-Key": "fc6d37421fmsh1063f0ca2854726p107fecjsn9c5340af29ad",
        "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const teams = response.data.table;
      setEpl(
        
        teams.map((club) => (
          <tr className="border-solid border-2 border-indigo-600"  key={club.id}>
            <td >{club.rank}</td>
            <td>{club.clubName}</td>
            <td>{club.points}</td>
            <td>{club.goalDifference}</td>
          </tr>
        ))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex-col  justify-center">
      <div>Todays Standings</div>
      <table className=" border-solid" >
        <tr className=" border-solid border-indigo-600">
          <th>position</th>
          <th>club</th>
          <th>points</th>
          <th>Gd</th>
        </tr>
        {epl}
      </table>
    </div>
  );
};
