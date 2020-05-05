import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
export default class Home extends React.Component{
    render(){
        return(
            <div className="flex h-screen justify-around items-center" id="Maincomponent">
                <div id="Home" className="lg:w-6/12 flex-col flex-wrap justify-center m:p-0 md:p-4 lg:p-16 xl:p-20 xl:6">
                    <div id="Bienvenido" className="text-center lg:text-4xl">
                        <p>BIENVENIDO</p>
                    </div>
                    <div className=" py-4 text-center">
                        <p className="text-xl" >Aqui encontraras información sobre accidentes aéreos</p>
                    </div>
                    <div className=" py-4 text-center" >
                            <Link className="hover:bg-gray-700 py-2 px-4 rounded shadow border-white lg:border-2" to="/flight">Seleccionar vuelo</Link>
                    </div>
                </div>
            </div> 
        );
    }
}