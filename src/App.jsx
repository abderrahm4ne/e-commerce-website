import NavBar from './Components/NavBar'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

function App() {

        {/*==== ROUTER ====*/} 
          const router = createBrowserRouter(
            createRoutesFromElements(
            <Route path="/" >
              <Route index element={<NavBar />}>
                  { /*<Route path="home" element={<HomePage />} />
                  <Route path="products" element={ <ProductPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="cart" element={<CartPage />} /> */}
              </Route>
            </Route>
            )
          )
        {/*==== ROUTER ====*/}   
  return(
    <div style={{height:"100vh"}} className='w-[100%] bg-amber-100'>
      <NavBar />
    </div>
  )
}

export default App
