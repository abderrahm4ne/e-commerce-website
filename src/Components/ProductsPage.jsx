// MUI
import Typography from '@mui/material/Typography';

// React Components
import Product from './Product';

// CONTEXT
import { ProductContext } from '../Context/ProductsContext';
import { useContext } from 'react';

export default function ProductsPage() { 

    const { myProducts , loading, setLoading } = useContext(ProductContext);
    return (
        <div className='flex flex-col h-[100%] w-[100%]'>
            
        </div>
    )
}