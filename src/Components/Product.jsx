// MUI
import Typography from '@mui/material/Typography';

// react hooks 
import { useContext } from 'react';
import { useParams } from 'react-router-dom';


// components
import { ProductContext } from '../Context/ProductsContext';


// ROUTER 
import { NavLink } from 'react-router-dom';

export default function Product() {

    // CONTEXT
    const { myProducts , loading} = useContext(ProductContext);
    const { id } = useParams();

    const currentProduct = myProducts.find(product => product.id === id);
    if (!currentProduct) {
        return (
            <Typography variant='h5' className='text-center text-[#3B3B3B]'>
                Product not found
            </Typography>
        );
    } 
  
    const currentProductArrayOfPictures = [1 , 2, 3, 4].map(num => `../public/DB/${id}/${num}.jpg`);

    return ( 
            
        <div className=' flex flex-row w-[98vw]'>

            { /* OTHER PRODUCTS NAME */ }

              <div className='flex flex-col text-black-900 lg:w-[17vw] p-3 border-r-3 border-black-900 mt-3.5 mb-3.5 '>

                  <Typography variant='h5' className=' pl-3 text-[#3B3B3B]' sx={{fontWeight:"bold"}}>
                    Others Products
                  </Typography>

                  <div className='flex flex-col justify-center'>
                      {myProducts.map((product) => (
                          <NavLink to={`/products/${product.id}`} key={product.id} className='p-2 m-2 underline' >
                              <Typography variant='h7' sx={{color:"#3B3B3B", fontWeight:"bold"}}>{product.article}</Typography>
                          </NavLink>
                      ))}
                  </div>
              </div>
              
            {/* OTHER PRODUCTS NAME */ }



            {/* PRODUCT DETAILS */ }

                <div className='w-[100%] p-3 mt-3.5 mb-3.5' >

                    {loading ? (
                        <Typography variant='h5' className='text-center text-[#3B3B3B]'>
                            Loading...
                        </Typography>
                    ) : (
                      <div className='flex flex-col gap-0.5'>


                        <div className='border-3 border-black w-[22%] rounded-md'>
                              <img src={`../public/DB/${id}/productPage.png`} alt={currentProduct.name}
                              className='w-[100%] h-[370px] rounded-md'></img>
                        </div>


                        <div className='flex flex-row justify-start gap-2 w-[24%]'>
                            {currentProductArrayOfPictures.map((picture, index) => ( 
                              <div key={index} className='w-[70px] h-[72px] border-2 border-black rounded-sm'>
                                <img src={picture} alt={`Product ${index}`} className='w-[70px] h-[70px] rounded-sm'
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                      
                </div>  

            {/* PRODUCT DETAILS */ }         

        </div>
          
    )}