import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errors } = useGames();
  return (
    <>
      {errors && <Text> {errors}</Text>}
      <SimpleGrid
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}>
            {" "}
          </GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
