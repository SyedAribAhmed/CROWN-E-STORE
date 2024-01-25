import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MenuItems.scss' 

const MenuItems = ({ title, imageUrl, size, pathUrl}) => {

  const navigate = useNavigate()

  return (
    <div className={`${size} menu-items`} 
      onClick={ () => navigate(`${pathUrl}`)}> 
    
      <div className='background-image' 
      style={{ backgroundImage: `url(${imageUrl})`}} />
      
      <div className='content'>
        <h1 className='title'>{ title.toUpperCase()}</h1>
        
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItems