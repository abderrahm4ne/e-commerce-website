import HomePageRouter from './Routers/HomePageRouter';
import NavBarRouter from './Routers/NavBarRouter'; 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
                   <Route index path='home' element={
                          <HomePageRouter />
                    }/>
                 { /*<Route path="products" element={ <ProductPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="cart" element={<CartPage />} /> */}
              </Route>
            
            )
          )
        {/*==== ROUTER ====*/}        
  return(
    <RouterProvider router={router}>
        <ThemeProvider theme={theme}>
        </ThemeProvider>        
    </RouterProvider>
  )
}

export default App
