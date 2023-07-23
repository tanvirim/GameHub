import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" 
          " aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" bg="">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="" paddingX="5px">
            <GenresList />
          </GridItem>
        </Show>
        <GridItem area="main" bg="">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
