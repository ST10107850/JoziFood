import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';

export const FoodDetails = () => {
    const { id } = useParams();
    const [foodData, setFoodData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                const meal = data.meals[0];
                setFoodData(meal);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching food data:', error);
                setLoading(false);
            }
        };

        fetchFoodData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!foodData) return <p>No food data available.</p>;

    
    const instructions = foodData.strInstructions.split('.').filter(step => step.trim()).map((step, index) => (
        <li key={index} className='mb-2'>
            {step.trim()}.
        </li>
    ));

    return (
      <div className='top-0 left-0 w-full z-10'>
        <Hero isHome={false} title={foodData.strMeal} />
        <div className='flex flex-col items-center py-12 px-10'>
          <h1 className='text-5xl font-dancing mb-8 text-yellow-300'>{foodData.strMeal}</h1>
          <p className="text-base md:text-lg text-gray-600">
            {foodData.strCategory}
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Heritage: {foodData.strArea}
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl'>
            <div className='col-span-1 flex justify-center'>
              <div className='w-[300px] h-[300px] md:w-[1000px] md:h-[600px] overflow-hidden rounded-full shadow-lg'>
                <img src={foodData.strMealThumb} alt={foodData.strMeal} className='w-full h-full object-cover rounded-full' />
              </div>
            </div>
            <div className='col-span-2'>
              <h2 className='text-xl font-semibold mb-4'>Ingredients</h2>
              <ul className='list-disc pl-5'>
                {Object.keys(foodData)
                  .filter(key => key.includes('strIngredient') && foodData[key])
                  .map((key, index) => (
                    <li key={index} className='mb-1'>
                      {foodData[key]} - {foodData[`strMeasure${key.replace('strIngredient', '')}`]}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className='flex flex-col items-center mt-8 w-full max-w-4xl'>
            <div className='mb-6'>
              <h2 className='text-xl font-semibold mb-4'>Instructions</h2>
              <ul className='list-decimal pl-5'>
                {instructions}
              </ul>
            </div>
            {foodData.strYoutube && (
              <div  >
                <h2 className='text-xl font-semibold mb-4'>Recipe Video</h2>
                <iframe className='h-[315px]  md:w-[520px]'
            
                  src={`https://www.youtube.com/embed/${foodData.strYoutube.split('v=')[1]}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}
