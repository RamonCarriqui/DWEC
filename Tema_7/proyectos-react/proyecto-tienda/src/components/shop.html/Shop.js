import React from "react";
import producto from "../index.html/Producto";

class Shop extends React.Component {
    state = {}
    render() {
        {/* Creo un bucle que monte los productos obtenidos del JSON importado */ }
        const listaproductos = producto.map((objeto, index) => {
            return (
                <div className="single-shop-product" key={index}>
                    <div className="product-upper">
                        <img src={objeto.imagen} alt="" />
                    </div>
                    <h2>{objeto.nombre}</h2>
                    <div className="product-carousel-price">
                        <ins>{objeto.precio}€</ins> <p>Stock: {objeto.stock}</p>
                    </div>

                    <div className="product-option-shop">
                        <a className="add_to_cart_button"
                        // data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70"
                        >Add to cart</a>
                    </div>
                </div>
            );

        });

        return (
            <div>
                <div className="product-big-title-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-bit-title text-center">
                                    <h2>Shop</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-product-area">
                    <div className="zigzag-bottom"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                {listaproductos}
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-1.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-3.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-4.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-2.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-1.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-3.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-4.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-2.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-1.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-3.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-shop-product">
                                    <div className="product-upper">
                                        <img src="img/product-4.jpg" alt="" />
                                    </div>
                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>

                                    <div className="product-option-shop">
                                        <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default Shop;