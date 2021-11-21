import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
   <List divided verticalAlign='middle'>
      <List.Item >
         <List.Content floated='right'>
            <Button onClick={removeFromCart.bind(this, id)} color="red">
               Delete
            </Button>
         </List.Content>
         <Image avatar src={image} />
         <List.Content>{title}</List.Content>
      </List.Item>
   </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
   <Menu>
      <Menu.Item name='browse'>
         Books store
      </Menu.Item>

      <Menu.Menu position='right'>
         <Menu.Item name='signup'>
            Total: &nbsp; <b>{totalPrice}</b> &nbsp; USD.
         </Menu.Item>

         <Popup
            trigger={
               <Menu.Item name='help'>
                  Cart (<b>{count}</b>)
               </Menu.Item>
            }
            content={items.length > 0
               ? items.map(book => <CartComponent key={book.id} {...book} />)
               : "There is nothing in cart"
            }
            on="click"
            hideOnScroll
         />

      </Menu.Menu>
   </Menu>
);

export default MenuComponent;
