import React from 'react'
import CollectionItem from '../collection-item/CollectionItem';
import './preview-collection.scss';
export default function PreviewCollection({ items, title }) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.map((item, inx) => {
                    if (inx < 4)
                      return  <CollectionItem key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}/>
                })}
            </div>
        </div>
    )
}
