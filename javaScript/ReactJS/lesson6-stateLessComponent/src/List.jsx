import React from 'react'

const List = ({title,price}) => {
  return (
    <li>
        {title} - {price}$
    </li>
  )
}

export default List