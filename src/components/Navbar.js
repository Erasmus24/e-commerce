import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
           <nav className='navbar navbar-expand-sm navbar-dark px-sm-5' >
               <Link to='/'>
                    <i class="fas fa-chess-rook"></i>
               </Link>

           </nav>
        )
    }
}
