import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id , bookTitle, bookDesc, authorName ,imageUrl, category} = useLoaderData();
    const c= "as"
    console.log(bookTitle)
  return (
    <div className='mt-28 px-4 lg:px-24 '>

        <img src={imageUrl} className='h-96' alt=''/>
        
        <h2>{bookTitle}</h2>
        <h3>{authorName}</h3>
        <p>{bookDesc}</p>
        <h4>{category}</h4>
        
    </div>
  )
}

export default SingleBook