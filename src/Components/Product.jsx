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
    return ( 
            
        <div className=' flex flex-row w-[98vw]'>

            { /* OTHER PRODUCTS NAME */ }

            <div className='flex flex-col text-black-900 lg:w-[17vw] p-3 border-r-3 border-black-900 mt-3.5 mb-3.5'>

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


        </div>
          
    )}