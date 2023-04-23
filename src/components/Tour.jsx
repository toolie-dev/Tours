import React, { useState } from 'react'

const Tour = ({ name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : info.slice(0, 200) + '...'}
          <button onClick={() => setReadMore(!readMore)} className='info-btn'>
            Read more
          </button>
        </p>
        <button onClick={removeTour} className='delete-btn btn-block btn'>
          not interested
        </button>
      </div>
    </article>
  )
}

export default Tour
