import {
  ChakraProvider, extendTheme
} from '@chakra-ui/react';

import { HashRouter, Routes, Route } from "react-router-dom"
import Landing from './routes/Landing';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#140d37",
        color: "white", // Set the text color if needed
        margin: 0,
      },
    },
  },
});


function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
