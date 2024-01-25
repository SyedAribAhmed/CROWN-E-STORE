import React from 'react'
import './CollectionItem.scss' 

import CustomButton from '../custom-button/CustomButton'

import { addItem } from '../../redux/cart/cart.actions'
import { useDispatch, useSelector } from 'react-redux'

const CollectionItem = ({ item}) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();
    const items = useSelector(state => state.items)
    const handleAddItem = item => {
        dispatch(addItem(item))
    }

    return (
        <div className='collection-item'>
            <div className='image' 
                 style={{ backgroundImage: `url(${imageUrl})`}}>
            </div>  
            <div className='collection-footer'>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
            </div>
            <CustomButton onClick={() => handleAddItem(item)} inverted> Add to Cart </CustomButton>
        </div>
    )
}

export default CollectionItem
