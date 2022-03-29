import { Component } from "react";
import Product from "./Product";

class GridProducts extends Component{
    render(){
        return(
            
            this.props.products.map(product => 

                
                    
                        <Product producto={product} addCart={this.props.addCart}key={product.id} />

             

                  

                    
   
               
                
                )
        )
    }


} 


export default GridProducts;