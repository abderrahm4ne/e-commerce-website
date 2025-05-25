// MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';


// React Components
import Product from './Product';

// OTHER LIBRARIES
import gsap from 'gsap';

// CONTEXT
import { ProductContext } from '../Context/ProductsContext';
import { useContext, useState, useEffect, useRef } from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';


// COMPONENTS
import { ProductBox } from './ProductBox';
export default function ProductsPage() { 

    const { myProducts , loading} = useContext(ProductContext);
    const [ searchField, setSearchField ] = useState(false);
    const searchFieldForGsap = useRef(null);
    console.log(myProducts);

    // gsap animation for the search filed 
    useEffect(() => {
        if(searchField){
            gsap.fromTo(searchFieldForGsap.current, 
                { opacity: 0, x: -5}, 
                { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
            )
        }
        if(!searchField){
            gsap.to(searchFieldForGsap.current, 
                { opacity: 0, x: -5, duration: 0.5, ease: "power2.out" }
            )
        }
    }, [searchField])

    return (
        <div className='flex flex-col gap-10'>          
            
            <div className='flex flex-col items-start pl-20 gap-7'>
                
                <Typography variant="h3" gutterBottom={false} sx={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"}} className='bg-amber-500'>
                    OUR PRODUCTS
                </Typography>
                      

                ``
                    

            </div>
            
            
            <div className='flex flex-col items-center gap-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%]'>
                        {loading ? (
                            <Typography variant="h1" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center"}}>
                                Loading Products...
                            </Typography>
                        ) : (
                            myProducts.map(product => (
                                <NavLink to={`/products/${product.id}`} key={product.id} style={{textDecoration:"none", border:"1px solid #3f3f31"}} className={"w-[100%] h-[380px] rounded-lg transition duration-300 ease-in-out hover:border-8 hover:shadow-lg"}>
                                        <ProductBox product={product} />
                                </NavLink>
                            ))
                        )}
                    </div>
            </div>
        </div>
    )
}