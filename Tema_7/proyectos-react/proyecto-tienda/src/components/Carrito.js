import React from "react";
class Carrito extends React.Component {

    state = {}
    render() {
        const carrito = productos.map((objeto, index) => {

            <tr className="cart_item" key={index}>
                <td className="product-remove">
                    <a title="Remove this item" className="remove" href="#">x</a>
                </td>


                <td className="product-name">
                    <a href="single-product.html">{objeto.nombre}</a>
                </td>

                <td className="product-price">
                    <span className="amount">£15.00</span>
                </td>

                <td className="product-quantity">
                    <div className="quantity buttons_added">
                        <input type="button" className="minus" value="-" />
                        <input type="number" size="4" className="input-text qty text" title="Qty" value="1" min="0" step="1" />
                        <input type="button" className="plus" value="+" />
                    </div>
                </td>

                <td className="product-subtotal">
                    <span className="amount">£15.00</span>
                </td>
            </tr>

        });

        return (
            <div>
                <table cellSpacing="0" className="shop_table cart">
                    <thead>
                        <tr>
                            <th className="product-remove">&nbsp;</th>
                            <th className="product-thumbnail">&nbsp;</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito}
                        <tr>
                            <td className="actions" colSpan="6">
                                <input type="submit" value="Update Cart" name="update_cart" className="button" />
                                <input type="submit" value="Checkout" name="proceed" className="checkout-button button alt wc-forward" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Carrito;