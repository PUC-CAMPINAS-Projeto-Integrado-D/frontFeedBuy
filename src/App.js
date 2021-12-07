import { ChakraProvider } from '@chakra-ui/react'; // Precisa do ChakraProvider
// import { render } from '@testing-library/react';
import Login from '../src/Pages/Login/Login';
// import Cadastro from '../src/Pages/Cadastro/Cadastro';
// import Buy from '../src/Pages/Buy/Buy';
// import Perfil from '../src/Pages/Perfil/Perfil';
// import CadastroProduto from '../src/Pages/CadastroProduto/CadastroProduto';
// import Feed from '../src/Pages/Feed/Feed';
// import Pay from '../src/Pages/Pay/Pay'

function App() {
    // Precisa do ChakraProvider
    return (
        <ChakraProvider>
            <Login/>
        </ChakraProvider>

    );
}

export default App;
