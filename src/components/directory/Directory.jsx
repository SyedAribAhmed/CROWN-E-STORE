import React from 'react'
import './Directory.scss'

import MenuItems from '../menu-items/MenuItems'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { useSelector } from 'react-redux'

const Directory = () => {

    const select = createStructuredSelector({
        sections: selectDirectorySections
    })

    const sections = useSelector((state) => selectDirectorySections(state))
    
  return (
    <div className='directory-menu'>
    {
        sections.map(({ id, ...OtherProps }) => (
            <MenuItems key={id} { ...OtherProps } />
        ))
    }
    </div>
  )
}

export default Directory