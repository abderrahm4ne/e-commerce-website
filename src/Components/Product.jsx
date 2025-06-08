// MUI
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';


// react hooks 
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


// components
import { ProductContext } from '../Context/ProductsContext';


// ROUTER 
import { NavLink } from 'react-router-dom';

export default function Product() {

    // CONTEXT
    const { myProducts , loading} = useContext(ProductContext);
    
    const { id } = useParams();

    const [ smallScreen, setSmallScreen] = useState(true);
 
    const [ currentPicture, setCurrentPicture ] = useState('productPage.png');

    const currentProduct = myProducts.find(product => product.id === id);
    if (!currentProduct) {
        return (    
            <Typography variant='h5' className='text-center text-[#3B3B3B]'>
                Product not found
            </Typography>
        );
    } 
  
    const currentProductArrayOfPictures = [1 , 2, 3, 4].map(num => `../public/DB/${id}/${num}.jpg`);

    const style = {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: '#dfdfdf',
                    border: '1px solid #000000',
                    boxShadow: 24,
                    borderRadius: '8px',
                    p: 4,
                    };

    

        const handleSwitch = () => {
            setSmallScreen(!smallScreen);
        }


    return ( 
            
        <div className=' flex flex-row w-[98vw] h-[100vh] bg-amber-100'>

            
            { /* OTHERs PRODUCTS NAME */ }
            
            
                
            {smallScreen && (
                <div className=' flex flex-col text-black-900 w-[17vw] h-full p-3 border-r-3 border-black-900 overflow-y-scroll'>
                  
                  <div className='font-bold text-3xl pl-8 text-[#3B3B3B] bg-amber-800 h-[10%]' style={{fontFamily: 'Oswald'}}>
                    Other Products
                  </div>

                  <div className='flex flex-col justify-center bg-amber-900 p-4' style={{fontFamily: 'Oswald'}}>
                      {myProducts.map((product) => (
                          <NavLink to={`/products/${product.id}`} key={product.id} className='p-3' >
                              <Typography variant='h7' sx={{color:"#3B3B3B", fontWeight:"bold"}}>
                                {product.article}
                              </Typography>
                          </NavLink>
                      ))}
                  </div>  
                </div>
            )}
            
            <Fab
            sx={{
                position: 'fixed',
                bottom: 20,
                left: 20,
                zIndex: 9999,
                backgroundColor: '#3B3B3B',
                color: "#dbdbdb",
                ":hover":{
                    color: "#dbdbdb",
                    backgroundColor: "#3B3B3B",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: 'Oswald',
            }}
            onClick={() => handleSwitch()}
            >
                { smallScreen ? ('hide') : ('show') }
            </Fab>

            {/* OTHERs PRODUCTS NAME */ }
            


            {/* PRODUCT DETAILS */ }
            

            {/* PRODUCT DETAILS */ }         

        </div>
          
    )}