import React from "react"; 
import { Card, Button, Grid } from 'semantic-ui-react'

const ProductCard = props =>{

    return(
        <Grid.Column>

        <Card>
            <Card.Content>
                <Card.Header>
                
                {props.product.name}
                </Card.Header>
          
             
                {props.product.category}
                <Card.Description>
                ${props.product.price} 
                </Card.Description>
            </Card.Content>
            

           <Button class="ui primary button"  content='Primary' primary onClick={() =>
                props.addToCart(props.product)
            
              }> Add to Cart </Button>

            <Button class="ui secondary button" content='Secondary' secondary onClick={() =>
                props.deleteListing(props.product)
              }> x </Button>

        </Card>

        </Grid.Column>

    ); 

}

export default ProductCard; 