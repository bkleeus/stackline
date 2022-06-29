import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import APIs from '../APIs/APIs';
import { ProductDetails, Chart, Table } from './index';
import { setProduct } from '../redux/actions/productActions';
import './Product.css';

function Product() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = () => {
            const response = APIs.fetchProduct();
            dispatch(setProduct(response));
        }
        fetchProduct();
    }, []);

    const sales = useSelector((productReducer) => productReducer.product.product.sales) || [];

    return (
        <div className='product-container'>
            <ProductDetails />
            {sales.length > 0 && <Chart sales={sales} />}
            {sales.length > 0 && <Table sales={sales} />}
        </div>
    );
}

export default Product;
