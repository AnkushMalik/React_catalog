import React from 'react'
import './search.styles.css'

export const SearchField = ({ placeholder, handleonchange }) => (
    <input
        type='text'
        placeholder={placeholder}
        onChange={handleonchange} />
)