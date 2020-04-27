import React from 'react';
import './situations.css';
import Cookies from 'universal-cookie';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//https://www.npmjs.com/package/react-multi-carousel

//openmaps

export default class Situations extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            activeItemIndex : 0
        };
        this.cookies = new Cookies();
    }

    render(){
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            }
          };
          
        return (
            <div className="flex flex-wrap content-center h-screen">
                <div className="lg:w-screen text-center lg:mb-8">
                    <h1>Situaciones</h1>
                </div>
                <div className="lg:w-11/12 ml-auto mr-auto">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="transform 300ms ease-in-out"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {this.cookies.get("situaciones").map((situacion) =>
                            <div className="flex flex-wrap lg:mb-4" id="inside-container">
                                <div className="lg:w-2/6 ml-auto">
                                <table className="table-auto items-center">
                                    <tr>
                                        <td>
                                            <p>Número de la situación</p>
                                        </td>
                                        <td>
                                            <p>{situacion.k_num}</p>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Descripción</p>
                                        </td>
                                        <td>
                                            <p>{situacion.d_situacion}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Latitud (decimal)</p>
                                        </td>
                                        <td>
                                            <p>{situacion.un_lat}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Longitud (decimal)</p>
                                        </td>
                                        <td>
                                            <p>{situacion.un_lon}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Nombre del lugar</p>
                                        </td>
                                        <td>
                                            <p>{situacion.u_nomlugar}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Hora del suceso</p>
                                        </td>
                                        <td>
                                            <p>{situacion.f_hora}</p>
                                        </td>
                                    </tr>
                                </table>
                                </div>
                                <div className="lg:w-2/6 mr-auto">
                                    <iframe 
                                        title="OSM" 
                                        class="iframe" 
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=-82.55264282226564%2C22.971353928229505%2C-82.19009399414064%2C23.200960808078566&layer=mapnik"
                                    >
                                    </iframe>
                                </div>
                            </div> 
                        )}
                    </Carousel>
                </div>
            </div>
        );
    }

    
}
