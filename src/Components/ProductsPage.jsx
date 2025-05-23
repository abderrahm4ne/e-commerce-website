// MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// React Components
import Product from './Product';

// CONTEXT
import { ProductContext } from '../Context/ProductsContext';
import { useContext } from 'react';

export default function ProductsPage() { 

    const { myProducts , loading, setLoading } = useContext(ProductContext);
    return (
        <div className='flex flex-col h-[100%] w-[100%]'>
            <div className='flex flex-col items-start h-[10%] gap-1'>
                <Typography variant="h4" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center"}}>
                    OUR PRODUCTS
                </Typography>

            </div>

        </div>
    )
}