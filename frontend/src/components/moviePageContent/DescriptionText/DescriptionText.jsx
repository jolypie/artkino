import React from 'react'

import './descriptionText.css';

function DescriptionText({ description }) {
  


  return (
    <div className="desc_text_container">
     <p className='desc_text'>{description}</p>
   </div>
  )
}

export default DescriptionText