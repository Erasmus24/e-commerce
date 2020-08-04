import React, { Component } from 'react';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value='Hello from context'>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};