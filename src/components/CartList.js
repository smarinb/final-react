import { Component } from "react";
import Cart from "./Cart"

class CartList extends Component{

    
    
    
    render(){

       
        return(
          
            
            
           this.props.carrito.map( productoCarrito =>
                <Cart  productoCarrito={productoCarrito} 
                controlCarrito={this.props.controlCarrito}
                
                
                deleteCart={this.props.deleteCart}
                
                ></Cart>
                
                
                )
            
        )
    }
}


export default CartList;