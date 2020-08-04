import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        return (
            <div>
                <h2>Hello to the products !!!!</h2>
            </div>
        )
    }
}
