import React from 'react'
import { IoStarOutline, IoPeopleOutline  } from 'react-icons/io5'

type cardType = {
  title: string
  time: number
  rate: number
  img: string
  student: number
  price: number
}


const Card = ({cardItem} : {cardItem : cardType}) => {
  return(
    <div className="card">
      <div className="card__head">
        <img src={cardItem.img} alt={cardItem.title} className='card__image' />
      </div>
      <div className="card__body">
        <div className="card__body--top">
          <div className="card--title">{cardItem.title}</div>
          <div className="card__rate"><IoStarOutline className='star__icon' /> <span>{cardItem.rate}</span></div>
        </div>
        <div className="card__body--bottom">
          <div className="card__left">
            <span className='time'>{cardItem.time} weeks</span>
            <span className='student'><IoPeopleOutline className='person__icon' /> <span>{cardItem.student} Students</span></span>
          </div>
          <div className="card__price">{cardItem.price}$</div>
        </div>
      </div>
    </div>
  )
}

export default Card;