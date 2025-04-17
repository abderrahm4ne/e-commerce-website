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
            <div className='flex flex-row ml-[200px]'>
                <Typography variant="h3" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", fontWeight:"bold", color:"#3B3B3B",letterSpacing:"-1px" }}>
                    OUR PRODUCTS
                </Typography>
            </div>
            <div className='flex flex-row gap-3 flex-wrap justify-end'>
            {!loading ? myProducts.map((product) => (
                <Product key={product.id} product={product}/>
            )) 
            : (
                <div className="flex justify-center h-screen p-10">
                    <Typography variant="h4" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", fontWeight:"bold", color:"#3B3B3B",letterSpacing:"-1px" }}>
                        Loading Products...
                    </Typography>
                </div>
            )}
            </div>
        </div>
    )
}