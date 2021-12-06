import React from 'react'

const ProductItem = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>title</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>price</strong>
                </p>
                <div className="product__rating">
                    {/* {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))} */}4
                </div>
            </div>

            <img src='' alt="" />

            <button>Add to Basket</button>
        </div>
    )
}

export default ProductItem