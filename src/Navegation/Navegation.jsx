import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from '../App';
import Buy from '../Pages/Buy';
import Cadastro from '../Pages/Cadastro';
import CadastroProduto from '../Pages/CadastroProduto';
import Feed from '../Pages/Feed';
import Login from '../Pages/Login';
import Pay from '../Pages/Pay';
import Perfil from '../Pages/Perfil';

const Navegation = () => {

    return (

        <Router>
                <Routes>

                <Route exact={true} path='/' element={<Feed/>}/>

                <Route
                    exact={true}
                    path='/Buy'
                    element = {<Buy/>}
                />

                <Route
                    exact={true}
                    path='/Cadastro'
                    element = {<Cadastro/>}
                />

                <Route
                    exact={true}
                    path='/CadastroProduto'
                    element = {<CadastroProduto/>}
                />

                <Route
                    exact={true}
                    path='/Feed'
                    element = {<Feed/>}
                />

                <Route
                    exact={true}
                    path='/Login'
                    element = {<Login/>}
                />

                <Route
                    exact={true}
                    path='/Perfil'
                    element = {<Perfil/>}
                />

                <Route
                    exact={true}
                    path='/Pay'
                    element = {<Pay/>}
                />

                </Routes>

        </Router>

    );
}
export default Navegation;
