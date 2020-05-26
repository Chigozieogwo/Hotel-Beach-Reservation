import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'

export const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero" >
            <Banner title="Unique Rooms"  >
                 <Link to="/" className="btn-primary">Return Home</Link>   
            </Banner>
                
            </Hero>
        </div>
    )
}

export default Rooms;