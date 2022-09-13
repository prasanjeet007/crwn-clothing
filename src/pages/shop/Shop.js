import React, { Component } from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import SHOP_DATA from './shop-data';

export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
  render() {
    const {collections} = this.state;
    return (
        <div className='shop-page'>
          {collections.map((collection) =>{
            return <PreviewCollection id={collection.id} items={collection.items} title={collection.title}/>
          })}
        </div>
    )
  }
}
