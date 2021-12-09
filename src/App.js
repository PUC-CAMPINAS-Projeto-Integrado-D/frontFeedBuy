import { ChakraProvider } from '@chakra-ui/react'; // Precisa do ChakraProvider
// import { render } from '@testing-library/react';
// import Login from '../src/Pages/Login/Login';
// import Cadastro from '../src/Pages/Cadastro/Cadastro';
// import Buy from '../src/Pages/Buy/Buy';
// import Perfil from '../src/Pages/Perfil/Perfil';
// import CadastroProduto from '../src/Pages/CadastroProduto/CadastroProduto';
//import Feed from './Pages/Feed/Feed';
// import Pay from '../src/Pages/Pay/Pay'
// import CardProduct from '../src/Components/CardProduct/CardProduct:';
// import ViewProduct from '../src/Pages/ViewProduct/ViewProduct';
// import MetaTags from 'react-meta-tags';

import Navegation from "./Navegation/Navegation";


function App() {
    // Precisa do ChakraProvider
    return (
          <ChakraProvider>
            <Navegation/>
          </ChakraProvider>
        )
}

export default App;
