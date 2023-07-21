import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
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
      >
        <GridItem area="nav" bg="">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="d">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
