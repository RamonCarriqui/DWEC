import React from "react";
import producto from './Producto';

class Productos extends React.Component {


    comprobarEstado(objeto){ // Para mostrar detalles de los productos
        console.log(objeto);
        const div = document.getElementById(objeto.id)
        if(objeto.estilo == "detallesOff"){
            objeto.estilo = "detallesOn";
            return div.className = objeto.estilo;

        }
        else{
            objeto.estilo = "detallesOn";
            objeto.estilo = "detallesOff"
            return div.className = objeto.estilo;


        }
    }

    render() {
        {/* Creo un bucle que monte los productos obtenidos del JSON importado */ }
        const listaproductos = producto.map((objeto, index) => {
            return (
                <div key={index}>
                    <div className="single-product" >
                        <div className="producto-interno">
                            <div className="product-f-image">
                                <img src={objeto.imagen} alt="Imagen del producto" />
                                    <br/>
                                    
                                    <button>Añadir al carrito</button>
                                    <button  onClick={() => this.comprobarEstado(objeto)}>Detalles</button>
                                
                            </div>

                            <h2>{objeto.nombre}</h2>
                            <div className="product-carousel-price">
                                <ins>{objeto.precio}€</ins> <p>Stock:{objeto.stock}</p>
                            </div>
                        </div>
                    </div>
                    {/* Detalles del producto */}
                    <div id={objeto.id} className={objeto.estilo}>
                        <p>prueba</p>

                    </div>
                </div>
            );

        });

        return (

            <div>

                <div className="maincontent-area">
                    <div className="zigzag-bottom"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="latest-product">
                                    <h2 className="section-title">Our Products</h2>
                                    <div className="product-carousel">

                                        {listaproductos}

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

export default Productos;