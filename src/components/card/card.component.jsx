import React from 'react'
import './card.styles.css'

export const Card = (props) => (
    <div className='user_card'>
        <img alt='catavatar' src={`https://robohash.org/${props.user.name.trim()}?set=set5`} />
        <h2>{props.user.name}</h2>
    </div>
);