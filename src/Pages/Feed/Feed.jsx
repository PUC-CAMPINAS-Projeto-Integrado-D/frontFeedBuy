import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Divider } from "@chakra-ui/react"
import CardProduct from '../../Components/CardProduct';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { axiosGet } from '../../Service/service';
import { useState, useEffect } from 'react';

import './Feed.css';

const Feed = () => {
    const link = 'http://localhost:3001/v1/public/ad';

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


    return (data &&
        <ChakraProvider>
            <header>
                <Header/>
            </header>

            <body>
                <div className = 'cardproduct-feed'>
                    {data.map((value)=>{
                        console.log(value);
                        return <CardProduct name={value.Descricao} imageURL={'http://localhost:3001/v1/public/media/'+value.ID} price={value.Preco} ID={value.ID}/>;
                    })}

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
