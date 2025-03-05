import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Mobile layout
        lg: `"nav nav" "aside main"`, // Large screens (1024px and above)
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bgColor="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bgColor="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
