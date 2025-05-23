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
import { ProductBox } from './productBox';
export default function ProductsPage() { 

    const { myProducts , loading} = useContext(ProductContext);
    console.log(myProducts);
    return (
        <div className='flex flex-col h-[100%] w-[100%]'>
            <div className='flex flex-col items-start h-[10%] gap-1'>
                <Typography variant="h4" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center"}}>
                    OUR PRODUCTS
                </Typography>

            </div>
            <div className='flex flex-col items-center h-[90%] w-[100%] gap-2'>
                    <div className='flex flex-row items-center justify-center gap-2 w-[100%] h-[10%]'>
                        <TextField id="outlined-basic" label="Search" variant="outlined" style={{width:"50%"}} />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] h-[90%] overflow-y-scroll'>
                        {loading ? (
                            <Typography variant="h1" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center"}}>
                                Loading Products...
                            </Typography>
                        ) : (
                            myProducts.map(product => (
                                <NavLink to={`/products/${product.id}`} key={product.id} style={{textDecoration:"none"}} className={"w-[100%] h-[350px] bg-[#3B3B3B] hover:bg-[#161616] rounded-lg shadow-lg transition duration-300 ease-in-out"}>
                                        <ProductBox product={product} />
                                </NavLink>
                            ))
                        )}
                    </div>
            </div>
        </div>
    )
}