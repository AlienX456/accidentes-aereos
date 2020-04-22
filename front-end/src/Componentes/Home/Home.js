import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
export default class Home extends React.Component{
    render(){
        return(
            <div className="flex h-screen justify-around items-center" id="Maincomponent">
                <div id="Home" className="flex-col flex-wrap justify-center xl:border-2 sm:border-2 m:border-0 m:p-0 md:p-4 lg:p-16 xl:p-20 xl:6">
                    <div id="Bienvenido" className="text-center sm:text-lg md:text-xl lg:text-2xl xl:text-5xl">
                        <p>BIENVENIDO</p>
                    </div>
                    <div className=" py-4 text-center">
                        <h1>Aqui encontraras información sobre accidentes aéreos</h1>
                    </div>
                    <div className=" py-4 text-center" >
                            <Link className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" to="/flight">Ir al enlace</Link>
                    </div>
                </div>
            </div> 
        );
    }
}