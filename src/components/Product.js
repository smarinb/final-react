import React, { Component } from "react";



class Product extends Component{

    

    

render(){
    return(
        
            <div className="col-4 mt-2">
            <img src={this.props.producto.imagen} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{this.props.producto.descripcion}</h5>
                <p className="card-text"><b>Precio</b>: {this.props.producto.precio}€</p>
                <p className="card-text"><b>Unidades</b>: {this.props.producto.unidades}</p>
                <button disabled={this.props.producto.unidades<=0}onClick={this.props.addCart.bind(this,this.props.producto.id,this.props.producto.descripcion,this.props.producto.imagen,this.props.producto.precio)} className="btn btn-primary">Añadir al Carro</button>
            </div>
        </div>
   
        
    )

}

}

export default Product;