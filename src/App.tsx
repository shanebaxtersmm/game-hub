import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Mobile layout
        lg: `"nav nav" "aside main"`, // Large screens (1024px and above)
      }}
    >
      <GridItem area="nav" bgColor="coral">
        Nav
      </GridItem>

      <GridItem
        area="aside"
        bgColor="gold"
        display={{ base: "none", lg: "block" }} // Hide on mobile, show on large screens
      >
        Aside
      </GridItem>

      <GridItem area="main" bgColor="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
