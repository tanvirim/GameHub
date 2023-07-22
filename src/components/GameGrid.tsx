import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  name: string;
  id: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  });
  return (
    <>
      {errors && <Text> {errors}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
