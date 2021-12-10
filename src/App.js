import { ChakraProvider } from '@chakra-ui/react'; // Precisa do ChakraProvider
// import { render } from '@testing-library/react';
// import Login from '../src/Pages/Login/Login';
// import Cadastro from '../src/Pages/Cadastro/Cadastro';
// import Buy from '../src/Pages/Buy/Buy';
// import Perfil from '../src/Pages/Perfil/Perfil';
// import CadastroProduto from '../src/Pages/CadastroProduto/CadastroProduto';
// import Feed from './Pages/Feed/Feed';
// import Pay from '../src/Pages/Pay/Pay'
// import CardProduct from '../src/Components/CardProduct/CardProduct:';
// import ViewProduct from '../src/Pages/ViewProduct/ViewProduct';
// import MetaTags from 'react-meta-tags';
import { useState, updateState, useCallback, useEffect } from 'react';
import { axiosGet } from './Service/service';

import Navegation from "./Navegation/Navegation";
var global_ip = null;



function App() {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(()=>{
        async function getIP() {
            const result = await axiosGet('https://web.levande.com.br/ip.json');
            const session = sessionStorage.getItem('ip');
            if(session == null || session == undefined){
                sessionStorage.setItem('ip', result.data.ip);
                window.location.reload();
            }
        }
        getIP();
    }, []);
    // Precisa do ChakraProvider
    return (
          <ChakraProvider>
            <Navegation/>
          </ChakraProvider>
        )
}

export default App;
