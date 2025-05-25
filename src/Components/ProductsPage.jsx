// MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// React Components
import Product from './Product';

// CONTEXT
import { ProductContext } from '../Context/ProductsContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// ROUTER
import { NavLink } from 'react-router-dom';


// COMPONENTS
import { ProductBox } from './ProductBox';
export default function ProductsPage() { 

    const { myProducts , loading} = useContext(ProductContext);
    console.log(myProducts);
    return (
        <div className='flex flex-col gap-4 '>
            
            
            <div className='flex flex-col items-start gap-4'>
                
                <Typography variant="h3" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center"}}>
                    OUR PRODUCTS
                </Typography>

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