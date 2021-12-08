import { ChakraProvider } from '@chakra-ui/react'; // Precisa do ChakraProvider
// import { render } from '@testing-library/react';
// import Login from '../src/Pages/Login/Login';
// import Cadastro from '../src/Pages/Cadastro/Cadastro';
// import Buy from '../src/Pages/Buy/Buy';
// import Perfil from '../src/Pages/Perfil/Perfil';
// import CadastroProduto from '../src/Pages/CadastroProduto/CadastroProduto';
// import Feed from '../src/Pages/Feed/Feed';
// import Pay from '../src/Pages/Pay/Pay'
// import CardProduct from '../src/Components/CardProduct/CardProduct:';
import ViewProduct from '../src/Pages/ViewProduct/ViewProduct';
import MetaTags from 'react-meta-tags';

function App() {
    // Precisa do ChakraProvider
    return (
        <ChakraProvider>
            <MetaTags> /* Deixe isso aqui */
               <title>Feedbuy</title>
               <meta id="meta-description" name="description" content="Some description."/>
               <meta id="meta-viewport" name="viewport" content="width=device-width, initial-scale=1"/>
            </MetaTags>

            <ViewProduct/>
        </ChakraProvider>
    );
}

export default App;
