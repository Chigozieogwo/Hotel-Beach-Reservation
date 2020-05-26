import React, { Component } from 'react'
import Title from './Title';
import {FaBeer,FaCocktail,FaHiking,FaShuttleVan} from 'react-icons/fa'

export default class Services extends Component {

    state= {
        services: [
            {
                icons: <FaCocktail/>,
                title: "free Cocktail",
                info : "The Best Cocktail in town with good fragrance",
            },
            {
                icons: <FaHiking />,
                title: "Enjoy Hiking ",
                info : "Meet New friends and enjoy the moment with them"
            },
            {
                icons: <FaShuttleVan />,
                title: "free delivery ",
                info : "Delivery of Goods and services at affordable rate"
            },
            {
                icons: <FaBeer />,
                title: "Strongest Beer",
                info : "The Best Cocktail in town with good fragrance"
            }
        ]
    };


    render() {
        return (
            <section className="services" >
            
                <Title title ="services" />
                <div className="services-center" >
                    {this.state.services.map((item, index) => {
                        return <article key = {index} className="services" >
                            <span > {item.icons} </span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                        </article>
                    })}
                </div>
                </section>
        )
    }
}
