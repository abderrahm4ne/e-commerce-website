// MUI
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Fab, TextField, Box } from '@mui/material';
import Modal from '@mui/material/Modal';



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
    const [ ShowSearch, setShowSearch ] = useState(false);
    
    const searchFieldForGsap = useRef(null);
    console.log(myProducts);

    

        const handleClose = () => {
            setShowSearch(false);
        }

        const handleOpen = () => {
            setShowSearch(true);
        }

    return (
        <div className='flex flex-col gap-10'>          
            
            <div className='flex flex-col items-start pl-20 gap-7'>
                
                <Typography variant="h3" gutterBottom={false} sx={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"}} className=''>
                    OUR PRODUCTS
                </Typography>
                      
            </div>
            
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
                }
            }}
            onClick={() => handleOpen()}
            >
            <SearchIcon />
            </Fab>

            {ShowSearch && ( 
                   <Modal
                        open={ShowSearch}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        asd
                    </Modal>
             )}

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