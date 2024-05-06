import React from 'react'
import './descInfo.css';

function DescInfo() {
  const description = [
    'Title',
    'Year',
    'Rating',
    'Countries',
    'Genres',
    'Director',
    'Cast'
  ];

  return (
    <div className="descInfo">
    <ul>
        {description.map((description, index) => (
          <li key={index} className={index % 2 === 0 ? 'info-darkRow' : 'info-lightRow'}>
            <p>{description} <span>Title and something</span></p> {/*здесь будет потом переменная*/}
          </li>
        ))}
      </ul>
  </div>
  )
}

export default DescInfo