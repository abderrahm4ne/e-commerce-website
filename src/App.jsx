// REACT COMPONENTS
import HomePageRouter from './Routers/HomePageRouter';
import NavBarRouter from './Routers/NavBarRouter'; 
import ProductsPageRouter from './Routers/ProductsPageRouter';
import Product from './Components/Product';
import ContactPage from './Components/ContactPage';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

// ROUTER
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// HOOKS

// ANOTHERS 
import axios from 'axios';


function App() {

  {/*==== MATERIAL UI ====*/}
  const theme = createTheme({
    typography: {
      
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
                    <Route path="products" element={ <ProductsPageRouter />}/>
                    <Route path='/products/:id' element={<Product />} />                   
                    <Route path="contact" element={<ContactPage />} />
                  { /* <Route path="about" element={<AboutPage />} />
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
