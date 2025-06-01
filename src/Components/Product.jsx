// MUI
import Typography from '@mui/material/Typography';

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

    return ( 
            
        <div className=' flex flex-row w-[98vw] h-[100vh]'>

            { /* OTHERs PRODUCTS NAME */ }

              <div className='flex flex-col text-black-900 lg:w-[17vw] p-3 border-r-3 border-black-900 mt-3.5 mb-3.5  overflow-y-scroll'>

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
              
            {/* OTHERs PRODUCTS NAME */ }



            {/* PRODUCT DETAILS */ }
            <div className='flex flex-col w-[100%] h-[90vh]'>

                <div className='self-start pt-4 pl-4'>
                    <Typography variant='h3' className='text-[#3B3B3B] font-bold text-center mt-5 mb-5 '>
                        Product Details
                    </Typography>
                </div>
                <div className='w-[100%] p-3 mt-3.5 gap-15 mb-3.5 flex flex-col justify-center items-center '>


                      <div className='self-start ml-10 flex flex-row gap-4 ' >
                        <NavLink to='/products' className='text-[#3B3B3B] '>
                            <Typography variant='h6' className='text-[#3B3B3B]' sx={{fontWeight:"bold"}}>
                                Product
                            </Typography>
                        </NavLink>
                        <Typography variant='h6' className='text-[#3B3B3B] '>
                            {'>'}
                        </Typography>
                        <NavLink to={`/products/${id}`} className='text-[#3B3B3B]'>
                            <Typography variant='h6' className='text-[#3B3B3B]' sx={{fontWeight:"bold"}}>
                                {currentProduct.reference}
                            </Typography>
                        </NavLink>
                      </div>

                    <div className='border-3 border-black p-7 rounded-md w-[60%] flex flex-row gap-3 justify-center bg-white'
                    style={{boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)'}}>
                              
                        <div>

                                {loading ? (
                                    <Typography variant='h5' className='text-center text-[#3B3B3B]'>
                                        Loading...
                                    </Typography>
                                ) : (
                                <div className='flex flex-col gap-1'>


                                    <div className='border-3 border-black product-image-container rounded-md'>
                                        <img src={`../public/DB/${id}/${currentPicture}`} alt={currentProduct.name}
                                        className='rounded-md'></img>
                                    </div>


                                    <div className='flex flex-row justify-start gap-2 w-[80%]'>
                                        <div className='w-[80px] h-[80px] border-2 border-black rounded-sm product-image-container' style={{cursor: 'pointer'}}>
                                            <img className='w-[80px] h-[78px] rounded-sm' src={`../public/DB/${id}/productPage.png`} alt="product page picture" onClick={() => {
                                                setCurrentPicture('productPage.png');
                                            }}/>
                                        </div>
                                        {currentProductArrayOfPictures.map((picture, index) => ( 
                                        <div key={index} style={{cursor: 'pointer'}} onClick={ ()=> {
                                            setCurrentPicture(`${index + 1}.jpg`)
                                        }} className='w-[80px] h-[80px] border-2 border-black rounded-sm product-image-container'>
                                            <img src={picture} alt={`Product ${picture}`} className='.product-image-containerrounded-sm'
                                            />
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                )}

                        </div>

                        <div className='border-1 border-black w-[1px] mx-3'></div>
                            
                        <div className='flex flex-col justify-around'>

                            <div className='flex flex-col gap-2 justify-center h-[60%]'>
                                    <Typography variant='h4' className='text-[#3B3B3B] font-bold'>
                                        {currentProduct.name}
                                    </Typography>
                                    <Typography variant='h6' className='text-[#3B3B3B]'>
                                        {currentProduct.article}
                                    </Typography>
                                    <Typography variant='h6' className='text-[#3B3B3B]'>
                                        Reference : {currentProduct.reference}
                                    </Typography>
                                    <Typography variant='h5' className='text-[#3B3B3B] font-bold'>
                                        Category: {currentProduct.Category}
                                    </Typography>
                                    <Typography variant='h5' className='text-[#3B3B3B] font-bold'>
                                        Serie: {currentProduct.series}
                                    </Typography>
                                    <Typography variant='h5' className='text-[#3B3B3B] font-bold'>
                                        Color: {currentProduct.color}
                                    </Typography>
                            </div>
                            
                            <button className='bg-[#3B3B3B] text-white px-4 py-4 rounded-md mt-4 hover:bg-[#2c2c2c] transition duration-300' style={{cursor: 'pointer', fontSize:'2rem'}}>
                                Add to Cart
                            </button>
                        </div>

                     </div>

                </div>  
            </div>

            {/* PRODUCT DETAILS */ }         

        </div>
          
    )}