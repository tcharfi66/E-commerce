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

    addToCart = (id) => {
        if(!this.state.selectedProducts.includes(id)){
          this.setState({
            selectedProducts: [...this.state.selectedProducts, id]
          })
        }
      }
    
      removeFromCart = (id) => {
        this.setState({
          selectedProducts: [...this.state.selectedProducts.filter(prodId=> prodId !== id)]
        })
      }

      

    //   fetch(url, {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(bodyObj)
    //   }).then(r => r.json())


    render(){
        return (
            <div> 

                <div>
                    <ShoppingCart myCart={this.state.selectedProducts}/>
                </div>


                <div>
                    <ProductCollection products={this.state.allProducts}/>
                </div>





            </div>
        ); 
    }
}

export default ProductsPage; 