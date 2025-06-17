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

        const handleSwitch = () => {
            setSmallScreen(!smallScreen);
        }


    return ( 
            
        <div className='flex flex-row'>

            
            { /* OTHERs PRODUCTS NAME */ }
            
            
            {smallScreen && (
                <div className={`flex flex-col text-black-900 w-[17vw] h-full p-3 border-r-3 border-black-900 overflow-y-scroll`}>
                  
                  <div className='font-bold text-3xl pl-8 text-[#3B3B3B] h-[10%]' style={{fontFamily: 'Oswald', textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"}} >
                    Other Products
                  </div>

                  <div className='flex flex-col justify-center p-4' style={{fontFamily: 'Oswald'}}>
                      {myProducts.map((product) => (
                          <NavLink to={`/products/${product.id}`} key={product.id} className='p-3' >
                              <Typography variant='h7' sx={{color:"#3B3B3B", fontWeight:"bold",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"}} > 
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
            
            <div className='p-3 w-full flex flex-col h-full gap-5 '>

            { /* PATH */ }

                <div className='flex flex-row items-baseline p-3 gap-2.5 '>
                    
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




            { /* PRODUCT PICTURES AND INFOS */ }



                <div className='flex lg:flex-row md:flex-row flex-col w-full lg:h-full md:h-full border-1 border-black p-3 gap-3 rounded-md '>

                { /* PRODUCT PICTURES */ }

                    <div className='border-black flex flex-col h-full lg:w-[30%] md:w-[30%] w-full'>
                            
                            <div className='product-image-container border-1 border-black rounded-md lg:w-[100%] lg:h-[100%] md:h-[100%] md:w-[100%] h-[75%] w-[85%] self-center'>
                                <img src={`../public/DB/${id}/${currentPicture}`} alt={currentProduct.name} />
                            </div>

                                <div className='flex flex-row flex-wrap gap-2 mt-3 self-center justify-center'>

                                    <div className='lg:w-[20%] md:w-[20%] w-[18%] aspect-square'>
                                        <img 
                                            src={`../public/DB/${id}/productPage.png`}
                                            alt="product page picture img"  
                                            className='w-full h-full object-cover rounded-md border border-black cursor-pointer'
                                        />
                                    </div>

                                    {currentProductArrayOfPictures.map((picture, index) => (
                                        <div className='lg:w-[20%] md:w-[20%] w-[17%] aspect-square' key={index}>
                                            <img 
                                                src={picture} 
                                                alt={`product-${index + 1}`} 
                                                className='w-full h-full object-cover rounded-md border border-black cursor-pointer'
                                                onClick={() => setCurrentPicture(`${index + 1}.jpg`)}
                                            />
                                        </div>
                                    ))}
                                </div>
                    </div>

                { /*---- PRODUCT PICTURES ----*/ }

                   <div className='lg:w-[1px] md:w-[1px] w-[100%] lg:h-full md:h-full h-[1px] bg-black lg:mx-4 md:mx-4 '/>
            
                { /* PRODUCT INFOS */ }


                    <div className='flex flex-col justify-between px-3 lg:py-7 md:py-7 sm:py-7 gap-5 w-full ' >
                        <div className='flex flex-col gap-2 lg:self-start md:self-start sm:self-start self-center ' style={{fontFamily: 'Oswald'}} >
                            <div className='lg:text-3xl md:text:3xl text-xl px-3 pb-4 pt-1'>
                                {(currentProduct.name).toUpperCase()}
                            </div>
                            
                            <div className='lg:text-2xl md:text:3xl text-md px-3'>
                              ARTICLE : {currentProduct.article}
                            </div>

                            <div className='lg:text-2xl md:text:3xl text-md px-3'>
                                REFERENCE : {currentProduct.reference}
                            </div>

                            <div className='lg:text-2xl md:text:3xl text-md px-3'>
                                SERIES : {(currentProduct.series).toUpperCase()}
                            </div>

                            <div className='lg:text-2xl md:text:3xl text-md px-3'>
                                COLOR : {(currentProduct.color).toUpperCase()}
                            </div>
                        </div>
                        
                        <div className='flex flex-col gap-2 mb-7' style={{fontFamily: 'Oswald'}}>
                            <div className='lg:text-3xl text-3xl text-md px-3 py-0.5'>
                                PRICE : 130 €
                            </div>

                            <button className='bg-[#3B3B3B] text-white text-2xl px-4 py-6 rounded-md lg:w-[40%] md:w-[40%] sm:w-[100%] w[100%] hover:bg-[#2c2c2c] transition duration-300 hover:cursor-pointer '
                            onClick={() => alert('Product added to cart!')}
                            >
                                ADD TO CART
                            </button>
                            
                        </div>
                        
                    </div> 


                { /*---- PRODUCT INFOS ----*/ }
                



             { /* PRODUCT PICTURES AND INFOS */ }   
                
                </div>


                <div className='flex flex-col justify-center gap-3 w-[95%] self-center'>
                     
                     <div className='text-3xl px-3' style={{fontFamily: 'Oswald'}}>
                        SAME CATEGORY PRODUCTS : 
                     </div>

                     <div className='self-center w-[100%] flex flex-row flex-wrap p-3 gap-y-5 gap-x-3 '>
                        {myProducts
                            .filter(product => product.series === currentProduct.series && product.id !== currentProduct.id)
                            .map(product  => (
                                <NavLink to={`/products/${product.id}`} key={product.id} className=''>
                                                              
                                <div className="flex flex-col items-center rounded-lg border-1 transition duration-300 ease-in-out hover:border-2 hover:scale-105 hover:shadow-lg p-3 w-[300px] min-h-[440px] h-auto" >
                                        
                                            <img 
                                                src={`../public/DB/${product.id}/productPage.png`} 
                                                alt={product.name} 
                                                className="w-[250px] h-[250px] object-cover border-1 border-black rounded-md mb-2">
                                            </img>

                                        
                                        
                                        <div className='text-center text-xl mt-5' style={{fontFamily: 'Oswald'}}>
                                                {(product.name).toUpperCase()}
                                        </div>

                                        <div className='text-center text-2xl mt-5' style={{fontFamily: 'Oswald'}}>
                                                PRICE : 130 €
                                        </div>
                                        
                                        

                                </div>
                                
                                </NavLink>
                            ))
                        }
                     </div>


                </div>
                                
            </div>

            {/* PRODUCT DETAILS */ }


        </div>
          
    )}