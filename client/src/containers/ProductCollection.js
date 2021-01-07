import React, {Component} from "react"; 
import ProductCard from "../components/ProductCard"
import {Grid, Header, Button,Dropdown, Checkbox, Form} from "semantic-ui-react"

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
             <Form>
                <Form.Field>
                <label>Book Name</label>
                <input placeholder='Book Name' />
                </Form.Field>

                <Form.Field>
                <label>Genre</label>
                <input placeholder='Genre' />
                </Form.Field>

                <Form.Field>
                <label>Price</label>
                <input placeholder='Price' />
                </Form.Field>

                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit' onClick={(e) =>

                // console.log("Create New Posting for Books")
                fetch("http://localhost:3000/products",{
                    method: "POST", 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify({
                        // name: Name ,
                        // category: Genre,
                        // price: Price
                    })

                })
              }>Submit</Button>

      
            </Form>
          
            
           <Grid columns={3} divided>
                 <Grid.Row>
                 {
                    this.props.products.map(p => <ProductCard product={p}/>)


                }

                 </Grid.Row>
               
               
           </Grid>
           </div>
        ); 
    }

}

export default ProductCollection; 