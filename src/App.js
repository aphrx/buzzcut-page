import {
  ChakraProvider, extendTheme
} from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './routes/Landing';
import BlogPage from './routes/BlogPage'; // Import BlogPage
import BlogPost from './routes/BlogPost'; // Import BlogPost
import PrivacyPage from './routes/PrivacyPage';
import TermsPage from './routes/TermsPage';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#140d37",
        color: "white", // Set the text color if needed
        margin: 0,
      },
      html:{
        scrollBehavior: "smooth"
      }

    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<BlogPage />} /> {/* Add route for BlogPage */}
          <Route path="/blog/:slug" element={<BlogPost />} /> {/* Dynamic route for individual blog posts */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
