import React, {Component} from "react"
import ProductCard from "../components/ProductCard"


class ShoppingCart extends Component{


render(){
    return(
        <div>
            <h1>SHOPPING CART </h1>
            
            {
            this.props.myCart.map(p => <ProductCard product={p} deleteListing= {this.props.deleteListing} />) 
            
            }


        </div>
    ); 
}


}

export default ShoppingCart; 