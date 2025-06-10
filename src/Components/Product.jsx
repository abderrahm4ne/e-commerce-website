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
            
        <div className=' flex flex-row h-[100vh]'>

            
            { /* OTHERs PRODUCTS NAME */ }
            
            
            {smallScreen && (
                <div className={`flex flex-col text-black-900 w-[17vw] h-full p-3 border-r-3 border-black-900 overflow-y-scroll`}>
                  
                  <div className='font-bold text-3xl pl-8 text-[#3B3B3B] h-[10%]' style={{fontFamily: 'Oswald'}}>
                    Other Products
                  </div>

                  <div className='flex flex-col justify-center p-4' style={{fontFamily: 'Oswald'}}>
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
            
            <div className='p-3 w-full flex flex-col h-full gap-5'>

            { /* PATH */ }

                <div className='flex flex-row items-baseline p-3 gap-2.5'>
                    
                    <NavLink to={`../`} className=''>
                    <span className='text-[#3B3B3B] font-bold text-md'> HOME</span>
                    </NavLink> 
                    
                    <div className='text-xl font-bold'>
                       {' > '}
                    </div>

                    <NavLink to={`/products/`} className='font-bold'>
                            <span className='text-[#3B3B3B] font-bold text-md'> PRODUCTS</span>
                    </NavLink>
                    <div className='text-xl font-bold'>
                        {' > '}
                    </div>

                    <NavLink to={`/products/${currentProduct.id}`} className=''>
                        <span className='text-[#3B3B3B] font-bold text-md'> {(currentProduct.name).toUpperCase()}</span>
                    </NavLink>
                        
                </div>

            { /*---PATH---*/ }

                <div className='flex flex-row w-full border-1 border-black p-3 gap-3'>

                { /* PRODUCT PICTURES */ }

                    <div className='border-black flex flex-col'>
                            
                            <div className='product-image-container border-1 border-black rounded-md w-[100%] h-[100%]'>
                                <img src={`../public/DB/${id}/${currentPicture}`} alt={currentProduct.name}></img>
                            </div>

                                <div className='flex flex-row flex-wrap gap-2 mt-3 '>

                                    <img src={`../public/DB/${id}/productPage.png`}
                                    alt="product page picture img"  
                                    className='w-[80px] h-[80px] rounded-md border-1 border-black cursor-pointer' />

                                    {currentProductArrayOfPictures.map((picture, index) => (
                                        <img 
                                            key={index} 
                                            src={picture} 
                                            alt={`product-${index + 1}`} 
                                            className='w-[80px] h-[80px] rounded-md cursor-pointer border-1 border-black img'
                                            onClick={() => setCurrentPicture(`${index + 1}.jpg`)}
                                        />
                                    ))}
                                </div>
                    </div>

                { /*---- PRODUCT PICTURES ----*/ }

                                    <div className='w-[1px] h-[100%] bg-black mx-4' />
            
                { /* PRODUCT INFOS */ }


                    <div className='flex flex-col justify-between px-3 py-7 w-full h-full' >
                        <div className='flex flex-col gap-2 ' style={{fontFamily: 'Oswald'}} >
                            <div className='lg:text-3xl md:text:xl text-md p-3'>
                                {(currentProduct.name).toUpperCase()}
                            </div>
                            
                            <div className='lg:text-2xl md:text:xl text-md px-3 py-0.5'>
                              ARTICLE : {currentProduct.article}
                            </div>

                            <div className='lg:text-2xl md:text:xl text-md px-3 py-0.5'>
                                REFERENCE : {currentProduct.reference}
                            </div>

                            <div className='lg:text-2xl md:text:xl text-md px-3 py-0.5'>
                                SERIES : {(currentProduct.series).toUpperCase()}
                            </div>

                            <div className='lg:text-2xl md:text:xl text-md px-3 py-0.5'>
                                COLOR : {(currentProduct.color).toUpperCase()}
                            </div>
                        </div>
                        
                        <div className='flex flex-col gap-2 ' style={{fontFamily: 'Oswald'}}>
                            <div className='lg:text-2xl md:text:xl text-md px-3 py-0.5'>
                                PRICE : 130 €
                            </div>

                            <button className='bg-[#3B3B3B] text-white text-2xl px-4 py-6 rounded-md w-[40%] hover:bg-[#2c2c2c] transition duration-300 hover:cursor-pointer'
                            onClick={() => alert('Product added to cart!')}
                            >
                                ADD TO CART
                            </button>
                            
                        </div>
                        
                    </div> 


                { /*---- PRODUCT INFOS ----*/ }
                
                
                
                </div>


                <div>
                     <div className='text-3xl' style={{fontFamily: 'Oswald'}}>
                        SAME CATEGORY PRODUCTS : 
                     </div>
                </div>
                                
            </div>

            {/* PRODUCT DETAILS */ }


        </div>
          
    )}