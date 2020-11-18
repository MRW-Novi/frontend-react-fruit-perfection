import React from 'react';


function Product({image, title, description, position}) {
    return (
            <article className="product" id={position}>
                <img src={image} alt={title}/>
                <h2 className="product-name">{title}</h2>
                <p className="product-description">{description}</p>
            </article>
    );
}

export default Product;