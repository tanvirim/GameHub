import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, errors, loading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {errors && <Text> {errors}</Text>}
      <SimpleGrid
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              {" "}
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            {" "}
            <GameCard key={game.id} game={game}>
              {" "}
            </GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
