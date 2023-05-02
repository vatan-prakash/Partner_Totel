import React from 'react'
import HotelCard from '../cards/UserCard'
import styles from "./Mainleft.module.css"

export default function MainRight() {
  return (
    <div className={styles.right}>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      {/* <HotelCard/> */}
      
    </div>
  )
}
