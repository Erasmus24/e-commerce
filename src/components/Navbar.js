import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
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



