// REACT COMPONENTS
import HomePageRouter from './Routers/HomePageRouter';
import NavBarRouter from './Routers/NavBarRouter'; 
import ProductsPageRouter from './Routers/ProductsPageRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// ROUTER
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// HOOKS
import { useEffect, useState } from 'react';

// ANOTHERS 
import axios from 'axios';


function App() {


  {/*==== MATERIAL UI ====*/}
  const theme = createTheme({
    typography: {
      fontFamily: 'Oswald',
    },
  });
  {/*==== MATERIAL UI ====*/}

  
   {/*==== ROUTER ====*/} 
          const router = createBrowserRouter(
            createRoutesFromElements(
            
              <Route path='/' element={<NavBarRouter />}>
                   <Route index path='/' element={
                          <HomePageRouter />
                    }/>
                    <Route path="products" element={ <ProductsPageRouter />} />
                  { /*  <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="cart" element={<CartPage />} /> */}
                </Route>
            
            )
          )
   {/*==== ROUTER ====*/}        
   
   {/*==== HOOKS ====*/}
          
   {/*==== HOOKS ====*/}

   

  return(
    <RouterProvider router={router}>
        <ThemeProvider theme={theme}>
        </ThemeProvider>        
    </RouterProvider>
  )
}

export default App
