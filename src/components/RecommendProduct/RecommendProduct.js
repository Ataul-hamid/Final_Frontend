import React from 'react';
import OurProducts from '../OurProducts/OurProducts';
import './RecommendProduct.css'

function RecommendProduct(props) {
    return (
        <div>
            <h1 className='re_product'>Recommended Products </h1>
           <OurProducts></OurProducts>
        </div>
    );
}

export default RecommendProduct;