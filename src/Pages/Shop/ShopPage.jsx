import React from 'react'

import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import CollectionPage from '../collection/CollectionPage'

import { Routes, Route, useParams, } from 'react-router-dom'

const ShopPage = () => {

  const { collectionId } = useParams();
  // console.log(collectionId)
  return (
    <div className='shop-page'>
    <Routes>
      <Route path = '/' element = {<CollectionOverview/>} />
      <Route path = '/:collectionId' element = {<CollectionPage/>} />
    </Routes>
        
    </div>
    
  )
}

export default ShopPage