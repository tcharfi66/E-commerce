import React, {Component} from "react"; 
import ProductCollection from "./ProductCollection"; 
import ShoppingCart from "./ShoppingCart"; 

const allP = "http://localhost:3000/products"

class ProductsPage extends Component{ 

    state = {
        allProducts: [], 
        selectedProducts: []
    }
    componentDidMount(){
        fetch(allP)
        .then(r => r.json())
        .then(p => this.setState({
            allProducts: p
        }))
            
      
    }
    addToCart = (product) => {
        if(!this.state.selectedProducts.includes(product)){
          this.setState({
            selectedProducts: [...this.state.selectedProducts, product]
          })
        }
      }
    
      removeFromCart = (product) => {
        this.setState({
          selectedProducts: [...this.state.selectedProducts.filter(p=> p !== product)]
        })
      }
      deleteListing = (product) => {
        let bookToDelete = [...this.state.allProducts].filter(b => b.id !== product)
        //removes from backend 
        fetch(allP + "${id}", {
            method: "DELETE"
        }).then(() => this.setState({
          allProducts: bookToDelete
        }))
        //removes from frontend
        this.removeFromCart(product)
      }


      addProduct = (product) => {
          this.setState({
              allProducts: [...this.state.allProducts, product]
          })
      }


    render(){
        return (
            <div> 

                <div>
                    <ShoppingCart myCart={this.state.selectedProducts } deleteListing= {this.deleteListing}  />
                </div>


                <div>
                    <ProductCollection products={this.state.allProducts} addProduct={this.addProduct} addToCart={this.addToCart} deleteListing= {this.deleteListing} />
                    
                </div>





            </div>
        ); 
    }
}

export default ProductsPage; 