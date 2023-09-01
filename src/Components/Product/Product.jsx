import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product; 

    return (
        <div className='product'>
            <div className="productImg">
                <img src={img} alt="" />
            </div>
            <div className="productContent">
                <h3><Link to={"/product/"+key}>{name}</Link></h3>
                <p>by: {seller}</p>
                <h3>$ {price}</h3>
                <p>Only {stock} left in stock - order soon</p>
                { props.showAddToCart && <button 
                onClick={() => props.handleAddProduct(props.product)}
                className='main-button'>
                    <span>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;