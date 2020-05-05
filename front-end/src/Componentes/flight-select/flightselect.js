import Cookies from 'universal-cookie';
import React from 'react';
import './flightselect.css';
import axios from 'axios';
import {Link} from "react-router-dom";
//import obtener_info_accidente from '../../Servicios/obtener_info_accidente.js'

export default class Flightselect extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = {
            vuelos : [],
            selectValue : 'Ninguno',
            buttonHide: false
        };

        this.cookies = new Cookies();

        this.getDataAxios();
        //this.obtener_info_accidente();
    }



    getDataAxios(){
        axios.get("http://127.0.0.1:8000/api/vuelos").then
        (
            res=>{
                let results = res.data.results;
                let mapped = results.map(
                    (vuelo) => {
                        let fullid = vuelo.k_nomvuelo+'|'+vuelo.f_salida;
                        return {value: vuelo.k_numaccidente, display: fullid};
                    });
                this.setState({vuelos : mapped})
            }
        )
        .catch
        (
            err=>{console.log(err);}
        );
    }

    handleChangeSelect = (e) =>{
        this.setState({selectValue: e.target.value});
        this.cookies.set('num_accidente', e.target.value);
        if (e.target.value === "Ninguno"){
            this.setState({buttonHide:false})
        }else{
            this.setState({buttonHide:true})
        }
    }

    render() {
        return (
            <div className="flex h-screen justify-around items-center" id="Maincomponent">
                <div id="fs" className="flex-col flex-wrap justify-center m:p-0 md:p-4 lg:p-16 xl:p-20">
                    <div className=" py-4 text-center">
                        <p className="lg:text-2xl" >Elige a continuación el vuelo en particular que estas buscando</p>
                    </div>
                    <div className=" py-4 text-center" >
                        <select 
                            value={this.state.selectValue} 
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-state"
                            onChange={this.handleChangeSelect}>
                            <option value="Ninguno">Ninguno</option>
                            {this.state.vuelos.map((vuelo) => <option value={vuelo.value}>{vuelo.display}</option>)}
                        </select>
                        <div className=" py-4 text-center" >
                            {this.state.buttonHide && <Link className="hover:bg-gray-700 py-2 px-4 rounded shadow border-white lg:border-2" to={{pathname:"/info"}}>Ver información</Link>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}