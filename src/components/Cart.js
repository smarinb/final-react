import { Component } from "react"


class Cart extends Component{

    

    render(){
        //comentarios
        
        
    


       return(
        <div>
                
               
        <div className="card">
            <img  src={this.props.productoCarrito.imagen} className="card-img-top imagen-carrito"/>
            <div className="card-body">
                <p className="card-text">{this.props.productoCarrito.descripcion}</p>
                <p className="card-text">Codigo: {this.props.productoCarrito.id}</p>
                <p className="card-text">{this.props.controlCarrito[this.props.productoCarrito.id]} x {this.props.productoCarrito.precio} = {this.props.controlCarrito[this.props.productoCarrito.id]* this.props.productoCarrito.precio}€</p>
                <button onClick={this.props.deleteCart.bind(this,this.props.productoCarrito)} className="btn btn-danger">Quitar del carrito</button>

               
            </div>
        </div>  
       

       
    </div>
       )
           
            


        
    }
}

export default Cart;