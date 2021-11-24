import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
//import Buy from '../Pages/Buy';

function App() {
  return (
    < ChakraProvider >
      <Home/>
    </ ChakraProvider >
  );
}

export default App;
