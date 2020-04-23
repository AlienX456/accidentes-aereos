import React from 'react';
import Cookies from 'universal-cookie';
import './info.css';
import axios from 'axios';
import {Link} from "react-router-dom";


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
        this.cookies = new Cookies();
        this.getDataAxios();
    }

    getDataAxios(){
        axios.get("http://127.0.0.1:8000/api/informacion/?k_num="+this.cookies.get('num_accidente')).then
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

                //saving on cookies
                this.cookies.set("situaciones",result.situaciones);
            }
        )
        .catch
        (
            err=>{console.log(err);}
        );
    }

    render(){
        return(
        <div className="flex flex-wrap content-center h-screen gap-4">
            <div className="flex flex-wrap">
                <div className="lg:w-screen text-center">
                    <h1>Información del Accidente</h1>
                </div>
            </div>
            <div className="flex flex-wrap w-screen">
                <div id="info" className="w-9/12 ml-auto mr-auto xl:border-2 sm:border-2 m:border-0 m:p-0 md:p-4 lg:p-16">
                    <table className="table-auto items-center">
                        <tr className="lg:mb-2">
                            <td>
                                Descripción General
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
            </div>
            <div className="flex flex-wrap lg:w-screen">
                <img className="w-3/12 ml-auto" src={process.env.PUBLIC_URL + "img/F302.jpg"} alt="Imagen no encontrada" />
                <img className="w-3/12" src={process.env.PUBLIC_URL + "img/F302B.jpg"} alt="Imagen no encontrada" />
                <img className="w-3/12 mr-auto" src={process.env.PUBLIC_URL + "img/F302C.jpg"} alt="Imagen no encontrada" />
            </div>

            <div className="flex flex-wrap lg:w-screen">
                <Link className="ml-auto mr-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> {">>"} </Link>
            </div>
        </div>
        );
    }
}