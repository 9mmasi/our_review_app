import React, { useState } from 'react'
import reviews from './data'

const Review = () => {
  const[index,setIndex]=useState(0)
  const{name,text,image,job}=reviews[index]

  const checkNum=(number)=>{
    if(number>reviews.length-1){
      return 0
    }
    if(number<0){
      return reviews.length-1
    }
    return number
  }
  const nextReview = () => {
		setIndex((index) => {
			let newIndex = index + 1
			return checkNum(newIndex)
		})
	}
  const prevReview = () => {
		setIndex((index) => {
			let newIndex = index - 1
			return checkNum(newIndex)
		})
	}
  return (
    <section className="container">
    <div className="title">
      <h2>Reviews Card</h2>
      <div className="underline"></div>
    </div>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={job} id="person-img" />
      </div>
      <h4 id="author">{name}</h4>
      <p id="job">{job}</p>
      <p id="info">
        {text}
      </p>
      <div className="button-container">
        <button className="prev-btn btn">
          <i onClick={prevReview} className="fas fa-chevron-left"></i>
        </button>
        <button className="next-btn btn">
          <i onClick={nextReview} className="fas fa-chevron-right"></i>
        </button>
      </div>
    </article>
   
  </section>
  )
}

export default Review