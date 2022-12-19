import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import image2 from "../assets/images/img-2.jpg"
import image3 from "../assets/images/img-3.jpg"
import image4 from "../assets/images/img-4.jpg"
import image8 from "../assets/images/img-8.jpg"
import image9 from "../assets/images/img-9.jpg"

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={image9}
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/Services" />
                    <CardItem 
                    src={image2}
                    text="Travel through the Islands of Bali in a private cruise"
                    label="Luxury"
                    path="/Services" />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={image3}
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem
                    src={image4}
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                    />
                    <CardItem
                    src={image8}
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up'
                    />
          </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;
