import React from 'react';
import { Menu } from 'semantic-ui-react';

const Filter = ({ setFilter, filterCriteria }) => {
   return (
      <Menu secondary>
         <Menu.Item
            name='all'
            active={filterCriteria === 'all'}
            onClick={setFilter.bind(this, 'all')}>
            All
         </Menu.Item>
         <Menu.Item
            name='popular'
            active={filterCriteria === 'popular'}
            onClick={setFilter.bind(this, 'popular')}>
            Popular
         </Menu.Item>
         <Menu.Item
            name='price_high'
            active={filterCriteria === 'price_high'}
            onClick={setFilter.bind(this, 'price_high')}>
            Price (high)
         </Menu.Item>
         <Menu.Item
            name='price_low'
            active={filterCriteria === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}>
            Price (low)
         </Menu.Item>
         <Menu.Item
            name='author'
            active={filterCriteria === 'author'}
            onClick={setFilter.bind(this, 'author')}>
            Author
         </Menu.Item>
      </Menu>
   );
}

export default Filter;