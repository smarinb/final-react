import { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import GridProducts from "./components/GridProducts";
import productos from "./db.json";
import ProductForm from "./components/ProductForm"
import CartList from "./components/CartList";

class App extends Component {


 
  state = {
    productos: productos,
    carrito: [],
    controlCarrito: [],
    carritoInfo: [],
    categorias: ["videoconsolas", "plantas", "electrodomesticos", "sofas"],
    precioTotal: 0
  };

 

  cuantos = (item) => {
    let contador = 0;
    this.state.carrito.map((p)=>{
      if(p.id === item.id){
        contador++;
      }
    })
    
    return contador;
  }

  hayStock = (id) => {
    let hayStock = true;
    this.state.productos.map((p) => {
      if(p.id==id && p.unidades<=0){
        hayStock = false;
      }
    })
    return hayStock;
  }
  
  borrarProducto = (item) => {

    this.state.carrito.map((p)=>{
      if(this.cuantos(p)===1){
        const nuevoCarrito = this.state.carrito.filter(p => p.id !== item.id);
        this.setState({carrito: nuevoCarrito});
        this.state.precioTotal = this.state.precioTotal - p.precio;
        if(p.id===item.id){
          let producto =  this.state.productos.find((x)=> x.id === p.id);
          producto.unidades++;
        }

      }else{
        const nuevoCarrito = this.state.carrito.filter(p => p.id !== item.id);
        this.setState({carrito: nuevoCarrito});
        this.state.precioTotal = this.state.precioTotal - (p.precio*this.cuantos(p));
        if(p.id===item.id){
          let producto =  this.state.productos.find((x)=> x.id === p.id);
          producto.unidades++;
        }

        
      }
    })
    
   
    
    
    
    
  }

  addProduct = (descripcion,categoria,precio,unidades,imagen) =>{
    const nuevoProducto = {
      descripcion: descripcion,
      categoria: categoria,
      precio: precio,
      unidades: unidades,
      imagen: imagen
    }
    this.setState({productos: [...this.state.productos,nuevoProducto]})
  }
  

  encontrarProducto = (id) =>{
    let encontrado= false;
    this.state.carrito.map((p)=>{
      if(p.id===id){
        encontrado = true;
      }
    })
    return encontrado;
  }
  
  addCart = (id, descripcion, imagen, precio) => {
    const itemEncontrado = this.encontrarProducto(id);
    const producto = {
      id,descripcion,imagen,precio
    }
    console.log(itemEncontrado);

    this.state.productos.map((p)=>{
      if(p.id===id){
        p.unidades--;
        this.state.precioTotal += precio;
      }
    })



    if (itemEncontrado){
      this.state.carrito.map((p)=>{
        if(p.id===id){
          
          
          let items = [...this.state.controlCarrito];
          items[id]= items[id]+1;
          this.setState({controlCarrito:items});       
        }
      })

    

    }else{
          
          
      
          this.setState({controlCarrito:[...this.state.controlCarrito,1]});
          this.setState({carrito: [...this.state.carrito,producto]});
    }
  
    
  };

  deleteCart = (producto) => {



    this.state.productos.map((p)=>{
      if(p.id===producto.id){
        p.unidades++;
        this.state.precioTotal-=producto.precio;
      }
    })

    if(this.encontrarProducto(producto.id)){
      if(this.state.controlCarrito[producto.id] === 1){
        
        const nuevoCarrito = this.state.carrito.filter((p)=> p.id !== producto.id);
        this.setState({carrito:nuevoCarrito});
      }else{
        let items = [...this.state.controlCarrito];
        items[producto.id] = items[producto.id]-1;
        this.setState({controlCarrito:items})
      }
    }
  }

  render() {
    return (
      <div className="container">
        <header>
          <AppHeader></AppHeader>
        </header>
        
        <ProductForm addProduct={this.addProduct}></ProductForm>
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8">
            <div className="row">
              
              <GridProducts
                addCart={this.addCart}
                products={this.state.productos}
                categoria={this.cualEsMiCategoria}

                
              ></GridProducts>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <h2>Carrito</h2>
            <CartList 
            deleteCart={this.deleteCart}
            carrito={this.state.carrito}
            controlCarrito={this.state.controlCarrito}
           
            ></CartList>
            <h3>Precio total: {this.state.precioTotal}€</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
