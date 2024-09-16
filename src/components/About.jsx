import React from 'react'
import about from '../assets/Images/aboutBack.png';

const About = () => {
  return (
    <div
      className='h-[70vh] w-full bg-no-repeat bg-cover bg-center '
      style={{ backgroundImage: `url(${about})` }}>
      <div className='h-full flex flex-col justify-center items-center  space-y-20 py-32'
        style={{ backgroundImage: `url(${about})`, backgroundSize: 'cover' }}>

          <h1 className='text-white text-7xl font-dancing'>About Us</h1>
        <div className='px-6 md:px-72'>
          <h1 className='text-white text-lg text-justify' >I believe that food is more than just nourishment; it’s an experience to be savored and shared. Whether you're craving a hearty South African classic or something with a contemporary twist, I’m here to make your culinary dreams come true. My dishes are crafted with fresh, locally-sourced ingredients and a sprinkle of creativity.

            When I’m not cooking up a storm, you’ll find me exploring local markets, trying out new recipes, or spending quality time with family and friends. I’m excited to be part of your food journey and can’t wait to share my passion with you!

            Bon appétit!</h1>
        </div>

      </div>
    </div>
  )
}

export default About;