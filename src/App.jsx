import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { MainLayout } from './components/Layout/MainLayout'
import { HomePage } from './Pages/HomePage'
import { FoodDetails } from './Pages/FoodDetails'
import { MenuPage } from './Pages/MenuPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/menu/:id' element={<FoodDetails/>}/>
      </Route>
      
    )
  )

  return(
    <div className='overflow-x-hidden'>
      <RouterProvider router={router} />
    </div>
  ) ;
}

export default App;
