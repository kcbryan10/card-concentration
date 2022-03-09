import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>

      <Header />
      <div className="page">
      </div>
      <Footer />

    </ChakraProvider>
  );
}

export default App;
