import React from 'react';
import './info.css';
import axios from 'axios';
//import {Link} from "react-router-dom";


export default class Info extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            ntsb_doc : "",
            conclusion : "",
            heridos : 0,
            muertos : 0,
            vuelos : []
        };
        this.getDataAxios();
    }

    getDataAxios(){
        axios.get("http://127.0.0.1:8000/api/informacion/?k_num="+this.props.location.num).then
        (
            res=>{
                let result = res.data.results[0];
                console.log(res.data.results);
                this.setState({ntsb_doc : result.w_ntsbdoc});
                this.setState({conclusion : result.d_conclusion});
                this.setState({heridos : result.n_heridos});
                this.setState({muertos : result.n_muertos});
                this.setState({vuelos : result.vuelos});
            }
        )
        .catch
        (
            err=>{console.log(err);}
        );
    }

    render(){
        return(
        <div className="flex flex-wrap h-screen justify-around items-center" id="Maincomponent">
            <div id="info" className="justify-center m:p-0 md:p-4 lg:p-16">
                <h1>Información General </h1>
                <p id="data">{this.state.conclusion}</p>
                <ul>
                    <li>Documentos NTSB : 
                        <ul id="data" className="list-disc">
                            <li>{this.state.ntsb_doc}</li>
                        </ul>
                    </li>
                    <li>Heridos : {this.state.heridos}</li>
                    <li>Muertos : {this.state.muertos}</li>
                </ul>
            </div>
            <div id="info" className="justify-center m:p-0 md:p-4 lg:p-16">
                <ul>
                    <li>Vuelo(s) involucrados :
                        <ul id="data" className="list-disc">
                            {
                            this.state.vuelos.map((vuelo)=>
                                <li>{vuelo.k_nomvuelo} :
                                <ul id="data">
                                    <li>Ciudad de Origen : {vuelo.u_ciudadorigen}</li>
                                    <li>Ciudad de Destino : {vuelo.u_ciudaddestino}</li>
                                    <li>Matricula : {vuelo.i_registroavion}</li>
                                    <li>Modelo : {vuelo.k_nommodelo}</li>
                                    <li>Entidad : {vuelo.k_nomentidad}</li>
                                </ul>
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="info" className="justify-center m:p-0 md:p-4 lg:p-16">
                <ul>
                    <li>Vuelo(s) involucrados :
                        <ul id="data" className="list-disc">
                            {
                            this.state.vuelos.map((vuelo)=>
                                <li>{vuelo.k_nomvuelo} :
                                <ul id="data">
                                    <li>Ciudad de Origen : {vuelo.u_ciudadorigen}</li>
                                    <li>Ciudad de Destino : {vuelo.u_ciudaddestino}</li>
                                    <li>Matricula : {vuelo.i_registroavion}</li>
                                    <li>Modelo : {vuelo.k_nommodelo}</li>
                                    <li>Entidad : {vuelo.k_nomentidad}</li>
                                </ul>
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="info" className="justify-center m:p-0 md:p-4 lg:p-16">
                <ul>
                    <li>Vuelo(s) involucrados :
                        <ul id="data" className="list-disc">
                            {
                            this.state.vuelos.map((vuelo)=>
                                <li>{vuelo.k_nomvuelo} :
                                <ul id="data">
                                    <li>Ciudad de Origen : {vuelo.u_ciudadorigen}</li>
                                    <li>Ciudad de Destino : {vuelo.u_ciudaddestino}</li>
                                    <li>Matricula : {vuelo.i_registroavion}</li>
                                    <li>Modelo : {vuelo.k_nommodelo}</li>
                                    <li>Entidad : {vuelo.k_nomentidad}</li>
                                </ul>
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}