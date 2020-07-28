import React, { Component } from 'react'
import Title from './Title';
import Product from './Product';

export default class ProductList extends Component {
    state={
        products: []
    }
    render() {
        return (
            <React.Fragment>
                <div className='py-5'> {/*py means padding bottom*/}
                    <div className='container'>
                        <div className='row'>
                            <Title name='our' title='products'/>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
            // <Product/>
        )
    }
}
