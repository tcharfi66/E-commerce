import React from "react"; 
import { Card, Button, Grid } from 'semantic-ui-react'

const ProductCard = props =>{

    return(
        <Grid.Column>

        <Card>
            <Card.Content>
                <Card.Header>
                Book Title: 
                {props.product.name}
                </Card.Header>
          
                Genre: 
                {props.product.category}
                <Card.Description>
                ${props.product.price} 
                </Card.Description>
            </Card.Content>
            

           <Button onClick={(e) =>
                console.log(e.target)
              }> 🛒 </Button>

        </Card>

        </Grid.Column>

    ); 

}

export default ProductCard; 