import React from 'react';
import { Container } from './InputStyle';

const Input = ({label, id, ...props}) => {

    return (
        <Container className='wrapper'>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
        </Container>
    )
}

export default Input
