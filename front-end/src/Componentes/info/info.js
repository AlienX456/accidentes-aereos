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
            vuelos : [],
            situaciones : []
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
                this.setState({situaciones : result.situaciones});
            }
        )
        .catch
        (
            err=>{console.log(err);}
        );
    }

    render(){
        return(
        <div className="h-screen lg:pt-12 content-center ">
            <div className="flex flex-wrap justify-around lg:my-2">
                <h1>Información del Accidente</h1>
            </div>
            <div className="flex flex-wrap justify-around lg:my-2">
                <div id="info" className="w-6/12 justify-center m:p-0 md:p-4 lg:p-16">
                    <table className="table-auto items-center">
                        <tr className="lg:mb-2">
                            <td>
                                Información General
                            </td>
                            <td>
                                <p id="data">{this.state.conclusion}, mas información ir al enlace de la NTSB {this.state.ntsb_doc}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Heridos 
                            </td>
                            <td>
                                {this.state.heridos}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Muertos 
                            </td>
                            <td>
                                {this.state.muertos}
                            </td>
                        </tr>
                    </table>
                </div>
                <img className="w-5/24 justify-center" src={process.env.PUBLIC_URL + "img/F302.jpg"} alt="Imagen no encontrada" />
                <img className="w-5/24 justify-center" src={process.env.PUBLIC_URL + "img/F302B.jpg"} alt="Imagen no encontrada" />

            </div>
            <div className="flex flex-wrap justify-around items-center ">
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
                        <li>Situaciones:
                            <ul id="data" className="list-disc">
                                {
                                this.state.situaciones.map((situacion)=>
                                    <li>{situacion.k_num} :
                                    <ul id="data">
                                        <li>Descripción : {situacion.d_situacion}</li>
                                        <li>Latitud : {situacion.un_lat}</li>
                                        <li>Longitud : {situacion.un_lon}</li>
                                        <li>Lugar : {situacion.f_hora}</li>
                                        <li>Altitud : {situacion.altitud}</li>
                                    </ul>
                                    </li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}