import React from "react";
import { Menu } from "semantic-ui-react";

const MenuComponent = () => (
   <Menu>
      <Menu.Item name='browse'>
         Books store
      </Menu.Item>

      <Menu.Menu position='right'>
         <Menu.Item name='signup'>
            Total: &nbsp; <b>0</b> &nbsp; USD.
         </Menu.Item>

         <Menu.Item name='help'>
            Cart (<b>0</b>)
         </Menu.Item>
      </Menu.Menu>
   </Menu>
);

console.log('Log');
console.log(this);

export default MenuComponent;
