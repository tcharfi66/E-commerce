import React, {Component} from "react"
import ProductCard from "../components/ProductCard"


class ShoppingCart extends Component{


render(){
    return(
        <div>SHOPPING CART 
            
            {
            this.props.myCart.map(p => <ProductCard product={p}/>) 
            
            }


        </div>
    ); 
}


}

export default ShoppingCart; 