import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = props => (
    <div className='class_list'>
        {
            props.card_users.map(e => (
                <Card key={e.id} user={e} />
            ))
        }
    </div>
);