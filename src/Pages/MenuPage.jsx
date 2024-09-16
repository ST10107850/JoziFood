import React from 'react'
import Hero from '../components/Hero'
import { FoodFeatch } from '../components/FoodFeatch'

export const MenuPage = () => {
  return (
    <div>
        <Hero isHome={false}/>
        <FoodFeatch/>
    </div>
  )
}
