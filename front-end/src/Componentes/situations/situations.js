import React from 'react';
import './info.css';
import axios from 'axios';
import {Link} from "react-router-dom";


export default class Situations extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            vuelos : [],
            selectValue : 'Ninguno',
            buttonHide: false
        };
        this.getDataAxios();
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

    
}