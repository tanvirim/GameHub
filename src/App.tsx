import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genres } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // State to manage the game query
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* NavBar section */}
      <GridItem area="nav" bg="">
        <NavBar
          // Pass the onSearch function to NavBar
          // When the search text is entered, the gameQuery state is updated
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Show above="lg">
        {/* GenresList section (only visible above the 'lg' breakpoint) */}
        <GridItem area="aside" bg="" paddingX="5px">
          <GenresList
            // Pass selectedGenre and onSelectGenre props to GenresList
            // When a genre is selected, the gameQuery state is updated
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      {/* Main section */}
      <GridItem area="main" bg="">
        <Box paddingLeft={2}>
          {/* GameHeading section */}
          {/* Pass the gameQuery state to GameHeading */}
          <GameHeading gameQuery={gameQuery} />

          {/* HStack section (for PlatformSelector and SortSelector) */}
          <HStack spacing={5} marginBottom={5}>
            {/* PlatformSelector section */}
            {/* Pass the selectedPlatform and onSelectPlatform props to PlatformSelector */}
            {/* When a platform is selected, the gameQuery state is updated */}
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />

            {/* SortSelector section */}
            {/* Pass the selectedSort and onSelectSortOrder props to SortSelector */}
            {/* When a sort order is selected, the gameQuery state is updated */}
            <SortSelector
              selectedSort={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>

        {/* GameGrid section */}
        {/* Pass the gameQuery state to GameGrid */}
        {/* The GameGrid component will use the gameQuery to fetch and display the games */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
