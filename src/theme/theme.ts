import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "red.100",
        color: "gray.600"
      }
    }
  }
});
export default theme;