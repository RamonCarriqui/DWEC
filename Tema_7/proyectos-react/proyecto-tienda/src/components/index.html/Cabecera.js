import React from "react";

class Cabecera extends React.Component {
    
    state = {  } 
    render() { 
        return (
            <div>
                <div className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="user-menu">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-user"></i> My Account</a></li>
                                        <li><a href="#"><i className="fa fa-heart"></i> Wishlist</a></li>
                                        <li><a href="cart.html"><i className="fa fa-user"></i> My Cart</a></li>
                                        <li><a href="checkout.html"><i className="fa fa-user"></i> Checkout</a></li>
                                        <li><a href="#"><i className="fa fa-user"></i> Login</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="header-right">
                                    <ul className="list-unstyled list-inline">
                                        <li className="dropdown dropdown-small">
                                            <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret"></b></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">USD</a></li>
                                                <li><a href="#">INR</a></li>
                                                <li><a href="#">GBP</a></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown dropdown-small">
                                            <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret"></b></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">French</a></li>
                                                <li><a href="#">German</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-branding-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="logo">
                                    <h1><a href="./"><img src="img/logo.png" /></a></h1>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="shopping-item">
                                    <a href="cart.html">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">5</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainmenu-area">
                    <div className="container">
                        <div className="row">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="/">Home</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="single-product.html">Single product</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="#">Category</a></li>
                                    <li><a href="#">Others</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Cabecera;