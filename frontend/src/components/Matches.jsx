import React, { useEffect, useState } from "react";
import axios from "axios";

export const Matches = () => {
  const [liveMatches, setLiveMatches] = useState([]);
  const [selectedFixtures, setSelectedFixtures] = useState("39");

  const leagueFixtures = [
    { value: "39", league: "Premier league" },
    { value: "78", league: "Bundesliiga" },
    { value: "140", league: "LaLiga" },
    { value: "61", league: "Ligue 1" },
  ];

  const handleChange = (e) => {
    const newFixture = e.target.value;
    setSelectedFixtures(newFixture);
  };

  const fetchLiveMatches = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: {
        league: selectedFixtures,
        next: "5",
      },
      headers: {
        "X-RapidAPI-Key": "fc6d37421fmsh1063f0ca2854726p107fecjsn9c5340af29ad",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const fixtures = response.data.response;
      console.log(response.data.response);
      console.log(response);

      setLiveMatches(
        <main className="border-solid">
          {fixtures.map((fixture) => (
            <div className="flex flex-row justify-around items-center">
            <span>time</span>
        <div className="flex ">
            <div className="flex flex-col justify-center items-center">
            <img
          src={fixture.teams.home.logo}
          style={{ width: "50%" }}
          alt=""
          srcset=""
        />
            <span>{fixture.teams.home.name}</span>
            </div>
        </div>
        <div className="flex flex-col items-center">
        <p className=" items-center">{fixture.fixture.status.long}</p>
        <p className=" self-end">Venue: {fixture.fixture.venue.name}</p>
        </div>
        <div>
        <div className="flex flex-col justify-center items-center">
            <img
            className=" text-center"
          src={fixture.teams.away.logo}
          style={{ width: "50%" }}
          alt=""
          srcset=""
        />
            <span>{fixture.teams.away.name}</span>
            </div>
        </div>
    </div>


          ))}
        </main>
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLiveMatches();
  }, [selectedFixtures]);

  return (
    <main style={{fontFamily :"'Hubballi', sans-serif" }}>
      <select value={selectedFixtures} onChange={handleChange}>
        {leagueFixtures.map((option) => (
          <option key={option.value} value={option.value} >
            {option.league}
          </option>
        ))}
      </select>
      <h1>Todays Games</h1>
      {liveMatches}
    </main>
  );
};
