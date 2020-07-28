import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
           <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5' >
               <Link to='/' className='text-warning'>
                    <i class="fas fa-chess-rook"></i>
               </Link>
               <ul className='navbar-nav align-items-center'>
                   <li className='nav-item ml-5'>
                       <Link to='/' className='nav-link text-warning'>
                           Products
                       </Link>
                   </li>
               </ul>
               <Link to='/cart' className='ml-auto'>
                   <ButtonContainer>
                       <span className='mr-2'>
                            <i className="fas fa-cart-plus"/>
                       </span>
                       my cart
                   </ButtonContainer>
               </Link>
            
           </nav>
        )
    }
}

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
 &:hover{
     background: var(--lightBlue);
     color: var(--mianBlue);
 }
 &:focus{
     outline: none;
 }
`