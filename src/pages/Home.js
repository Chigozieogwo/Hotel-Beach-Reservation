import React from 'react';
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import Services from '../component/Services'
import { Link } from 'react-router-dom';


export default function Home() {

   
    return (
        <>
        <Hero>
            <Banner title="Affordable Rooms" subtitle="Rooms Starting from #5000">
            <Link to="/rooms" className="btn-primary">goto rooms</Link>   

            </Banner>
            
         </Hero>
            <Services>
                
            </Services>
          </>  
        
    )
}
