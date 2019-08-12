import React from 'react';
import './card-list.styles.css';

export const CardList = props => (
    <div className='class_list'>
        {
            props.card_users.map(e => (
                <h2 className='user_card' key={e.id}>{e.name}</h2>
            ))
        }
    </div>
    // return <div className='class_list'>{props.children}</div>
);