import React from 'react'

import './CollectionOverview.scss'
import CollectionPreview from '../collections/CollectionPreview'
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const CollectionOverview = () => {

    const collectionSelector = createStructuredSelector({
        collections: selectCollectionForPreview
    })
    
    const collections = useSelector((state) => selectCollectionForPreview(state))

  return (
    <div className='collections-overview'>
    {
        collections.map(({ id, ...CollectionProps}) => (
          <CollectionPreview key={id} {...CollectionProps}/>
        ))
    }
    </div>
  )
}

export default CollectionOverview