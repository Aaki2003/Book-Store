import React from 'react'
import Banner from '../components/banner'
import FavouriteBooks from './FavouriteBooks'
import BestSellerBooks from './BestSellerBooks'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import Review from './Review';
import MyFooter from '../components/MyFooter'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FavouriteBooks />
      <BestSellerBooks/>
      <PromoBanner/>
      <OtherBook/>
      <Review/>
      <MyFooter/>
    </div>
  )
}

export default Home