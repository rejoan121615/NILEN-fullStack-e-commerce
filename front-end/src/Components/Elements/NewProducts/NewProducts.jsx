import React from 'react'
import withSectionWrap from '../../HOC/withSectionWrap'


const NewProducts = () => {
  return (
    <div>
      <div className='max-boundry'></div>
    </div>
  )
}

export default withSectionWrap(NewProducts, {
  slider: false,
  title: 'new products'
});