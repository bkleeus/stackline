import React from 'react';
import { useSelector } from 'react-redux';
import Tags from './Tags';
import './ProductDetails.css';

const ProductDetails = () => {
    const product = useSelector((productReducer) => productReducer.product.product) || {};

    return (
        <header className='product-box'>
            <img src={product.image} className='product-image' alt='product image' />
            <div className='product-title'>{product.title}</div>
            <div className='product-subtitle'>{product.subtitle}</div>
            <div className='hline-upper' />
            <Tags />
            <div className='hline-lower' />
        </header>
    )
}

export default ProductDetails;