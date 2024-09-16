import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import PropType from "prop-type";

export const FoodFeatch = ({isHome = false}) => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = useRef(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productArray = [];
        for (let i = 0; i < 10; i++) {
          const rep = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const data = await rep.json();
          productArray.push(data.meals[0]);
        }
        setProducts(productArray);
      } catch (error) {
        console.error("There was an error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const description = products[currentIndex]?.strInstructions || "";
  const truncatedDescription = description.substring(0, 500) + ".....";
  const shouldShowMoreButton = description.length > 500;

  useEffect(() => {
    if (products.length > 0 && !showFullDescription) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 8000);

      return () => clearInterval(autoSlideInterval.current);
    }
  }, [products, showFullDescription]);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  const handleImageClick = (id) => {
    if (id) {
      navigate(`/menu/${id}`);
    } else {
      console.error("Product ID is undefined");
    }
  };

  return (
    <>
      {products.length === 0 ? (
        <div className="py-32 flex justify-center">
          <BeatLoader color="#FBBF24" />
        </div>
      ) : (
        <div className="relative flex justify-center items-center bg-gray-100 py-12 px-4">
          <div className="w-full max-w-4xl bg-white shadow-lg overflow-hidden relative rounded-xl">
            <div
              className="carousel flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: "100%",
              }}
            >
              {products.map((product) => (
                <div
                  key={product.idMeal}
                  className="flex-none w-full flex flex-col md:flex-row items-center p-4 md:p8"
                >
                  <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-dancing text-gray-800 mb-4">
                      {product?.strMeal}
                    </h1>
                    <div className="text-center mb-6">
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                        {product?.strMeal}
                      </h2>
                      <p className="text-base md:text-lg text-gray-600">
                        {product?.strCategory}
                      </p>
                      <p className="text-base md:text-lg text-gray-600">
                        Heritage: {product?.strArea}
                      </p>
                    </div>
                    <div className="text-justify text-gray-700 mb-6 px-9 md:px-8">
                      <p className="mb-4">
                        {showFullDescription
                          ? description
                          : truncatedDescription}
                      </p>
                      {shouldShowMoreButton && (
                        <button
                          onClick={() =>
                            setShowFullDescription((prevState) => !prevState)
                          }
                          className="text-yellow-400"
                        >
                          {showFullDescription ? "Less" : "More"}
                        </button>
                      )}
                    </div>
                    <div className={`uppercase mt-8 bg-yellow-400 px-5 py-2 rounded-lg ${isHome ? "block" : "hidden"}`}>
                      <Link to="/menu">All Specials</Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] overflow-hidden rounded-full shadow-lg">
                      <img
                        src={product?.strMealThumb}
                        alt="Meal Thumbnail"
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => handleImageClick(product.idMeal)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goToPreviousSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#8592;
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </>
  );
};


