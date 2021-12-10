import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Divider } from "@chakra-ui/react"
import CardProduct from '../../Components/CardProduct';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { axiosGet } from '../../Service/service';
import { useState, useEffect } from 'react';

import './Feed.css';

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const Feed = () => {
    const link = 'http://localhost:3001/v1/public/ad';
    const forceUpdate = useForceUpdate();
    const [data, updateData] = useState([]);

    useEffect(()=>{
        const request = async ()=>{
            try{
                const resposta = await axiosGet(link);
                updateData(resposta.data.data);
            }catch(ex){
                console.error(ex);
            }
        }
        request();
    }, []);
    const callback = () => {
        console.log("Aqui");
        forceUpdate();
    }

    return (data &&
        <ChakraProvider>
            <header>
                <Header onChangeInput={callback}/>
            </header>

            <body>
                <div className = 'cardproduct-feed'>
                    {data.filter((value)=>{
                        const txtValue = JSON.stringify(value);
                        const searched = new RegExp(sessionStorage.getItem('search'), 'gi');
                        if(searched != null && searched != ""){
                            return txtValue.match(searched) != null;
                        }else{
                            return true;
                        }
                    }).map((value)=>{
                        console.log(value);
                        return <CardProduct name={value.Descricao} imageURL={'http://localhost:3001/v1/public/media/'+value.ID} price={value.Preco} ID={value.ID}/>;
                    })}
                    {
                        data.filter((value)=>{
                            const txtValue = JSON.stringify(value);
                            const searched = new RegExp(sessionStorage.getItem('search'), 'gi');
                            if(searched != null && searched != ""){
                                return txtValue.match(searched) != null;
                            }else{
                                return true;
                            }
                        }).length == 0 &&
                        <div className="no-product">
                            <center> Nenhum produto encontrado </center>
                        </div>
                    }
                </div>
            </body>

            <footer>
                <Divider orientation="horizontal"/>
                <Footer/>
            </footer>
        </ChakraProvider>
    );
};

export default Feed;
