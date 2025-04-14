import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
  {/*==== MATERIAL UI ====*/}
  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans, sans-serif',
      box: {
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textTransform: 'none', // removes uppercase by default
      },
    }
  });
  {/*==== MATERIAL UI ====*/}

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
    <ThemeProvider theme={theme}>
    <div style={{height:"100vh"}} className='w-[100%]'>
      <NavBar />
      <div className='flex justify-center items-center h-[100vh] w-full'>
        <HomePage />
      </div>
      
    </div>
    </ThemeProvider>
  )
}

export default App
