import React from 'react';
import './situations.css';
import Cookies from 'universal-cookie';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//https://www.npmjs.com/package/react-multi-carousel

//mapa


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
                            <div className="flex flex-wrap lg:mb-4 lg:pt-8 lg:pb-8" id="inside-container">
                                <div className="lg:w-2/6 lg:mr-2 ml-auto">
                                <table className="table-auto items-center">
                                    <tr className="text-center">
                                        <td></td>
                                        <td>
                                            <p>{situacion.k_num}</p>
                                            <hr></hr>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Descripción</p>
                                        </td>
                                        <td>
                                            <p className="text-justify">{situacion.d_situacion}</p>
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
                                            <p>Lugar</p>
                                        </td>
                                        <td>
                                            <p>{situacion.u_nomlugar}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Hora</p>
                                        </td>
                                        <td>
                                            <p>{situacion.f_hora}</p>
                                        </td>
                                    </tr>
                                </table>
                                </div>
                                <div className="lg:w-2/6 lg:ml-2 mr-auto">
                                    <iframe title="myFrame" className="w-full h-full rounded" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=38.733158111572266%2C8.933744045863115%2C38.865680694580085%2C9.02174482491459&amp;layer=mapnik&amp;marker=8.977747104581484%2C38.79941940307617"></iframe>
                                </div>
                            </div> 
                        )}
                    </Carousel>
                </div>
            </div>
        );
    }  
}

/*
<iframe 
    title="OSM" 
    class="iframe" 
    src={"https://www.openstreetmap.org/export/embed.html?bbox=-82.55264282226564%2C22.971353928229505%2C-82.19009399414064%2C23.200960808078566&layer=mapnik"}
>
</iframe>
*/