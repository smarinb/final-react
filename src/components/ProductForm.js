import React, { useState, Component } from "react";

class ProductForm extends Component {
  state = {
    descripcion: "",
    categoria: "",
    precio: 0,
    unidades: 0,
    imagen: "",
  };

  escucharOnSubmit = (e) => {
    this.props.addProduct(
      this.state.descripcion,
      this.state.categoria,
      this.state.precio,
      this.state.unidades,
      this.state.imagen
    );
    e.preventDefault();
  };

  /*mostrar(){
            var archivo = document.getElementById("file").files[0];
            var reader = new FileReader();
            if (file) {
                reader.readAsDataURL(archivo );
                reader.onloadend = function () {
                    this.state.imagen = reader.result;
                }
            }
        }*/

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  

  

  render() {

    
    return (
      <form onSubmit={this.escucharOnSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="descripcion"
            placeholder="Escribe el nombre del producto"
            onChange={this.onChange}
            value={this.state.descripcion}
          />
          <br></br>
          <input
            type="text"
            name="categoria"
            placeholder="Escribe la categoria del producto"
            onChange={this.onChange}
            value={this.state.categoria}
          />
          <br></br>
          <input
            type="text"
            name="precio"
            placeholder="Escribe el precio del producto"
            onChange={this.onChange}
            value={this.state.precio}
          />
          <br></br>
          <input
            type="number"
            name="unidades"
            placeholder="Cuanto stock tiene el producto"
            onChange={this.onChange}
            value={this.state.unidades}
          />
          <br></br>

          <br></br>

          <br></br>
          <button type="submit">Añadir producto</button>
        </div>
      </form>
    );
  }
}

export default ProductForm;

