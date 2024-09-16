import React from 'react'

export const Footer = () => {
  return (
      <div className='flex bg-yellow-400 h-[280px] items-center justify-center flex-col text-white'>
          <div>

              <p> 6037  South BLVD CHARLOTTE, KZN 0746195664   </p>

          </div>
          <div className='flex md:space-x-28 space-x-4 mt-8 font-bold text-white px-6 uppercase'>
              <div>
                  <a href='/' className>HOME</a>
              </div>
              <div>
                  <a href='/menu'>MENU</a>
              </div>
              <div>
                  <a href='#about'>About</a>
              </div>
              <div>
                  <a href='#contact'>Contact</a>
              </div>

          </div>


          <div className='flex space-x-7 mt-8 text-[12px] text-white'>
              <div>
                  <p>pizzeria </p>
              </div>
              <div>
                  <p>All rights reserved</p>
              </div>
              <div>
                  <p>Design  by Elizabeth, Samuel and Duncan </p>
              </div>


          </div>



      </div>
  )
}
