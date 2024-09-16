import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import background from "../assets/Images/3.jpg";


export const Contact = () => {
  return (
    <div
      className='flex items-center flex-col py-36 bg-cover bg-center'
     
    >
        <h1 className="text-7xl font-dancing mb-4 text-black">Follow Us</h1>
        <p className="text-4xl mb-10 text-black">#500degreespizzeria</p>
        <div className="flex space-x-10">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook 
                className="text-7xl bg-yellow-400 text-white p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram 
                className="text-7xl bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-3 rounded-full hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter 
                className="text-7xl bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-300"
              />
            </a>
        </div>
    </div>
  )
}
