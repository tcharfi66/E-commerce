import React, {Component} from "react"; 
import ProductCard from "../components/ProductCard"
import {Grid, Header, Button,Dropdown, Checkbox, Form, Segment} from "semantic-ui-react"


const categories = [
    {
      key: 'All',
      text: 'All',
      value: 'All',
    },
    {
      key: 'Fantasy',
      text: 'Fantasy',
      value: 'Fantasy',
    },
    {
      key: 'Science nonfiction',
      text: 'Science nonfiction',
      value: 'Science nonfiction',
    },
    {
      key: 'Fable',
      text: 'Fable',
      value: 'Fable',
    },
  ]

class ProductCollection extends Component{

state = {
    name: "", 
    genre: "", 
    price: ""
}
    render(){
        return (
            <div>
        <Header as='h5' block>

            <span>
                Sort by Genre:{'  '}
                <Dropdown 
                inline
                options={categories}
                defaultValue={categories[0].value}
                />
            </span>
         </Header> 
         <Segment inverted>
             <Form inverted>
                <Form.Field>
                <label>Book Name</label>
                <input placeholder='Book Name' onChange={(event) => this.setState({name: event.target.value})}/>
                
                </Form.Field>

                <Form.Field>
                <label>Genre</label>
                <input placeholder='Genre' onChange={(event) => this.setState({genre: event.target.value})}/>
                </Form.Field>

                <Form.Field>
                <label>Price</label>
                <input placeholder='Price' onChange={(event) => this.setState({price: event.target.value})} />
                </Form.Field>

                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit' basic color='blue' onClick={() =>{
                    
                
                const newProduct = {
                    name: this.state.name ,
                    category: this.state.genre,
                    price: this.state.price
                }
                // console.log("Create New Posting for Books")
                fetch("http://localhost:3000/products",{
                    method: "POST", 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify(newProduct)

                }).then(r => r.json())
                .then(product => this.props.addProduct(product))

                }   
              }>Submit</Button>

            
            </Form>
            </Segment>
          
            
           <Grid columns={3} divided>
                 <Grid.Row>
                 {
                    this.props.products.map(p => <ProductCard product={p} addToCart={this.props.addToCart} deleteListing= {this.props.deleteListing} />)


                }

                 </Grid.Row>
               
               
           </Grid>
           </div>
        ); 
    }

}

export default ProductCollection; 