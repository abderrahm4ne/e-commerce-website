// MUI
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Fab } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



// React Components
import Product from './Product';

// OTHER LIBRARIES
import gsap from 'gsap';

// CONTEXT
import { ProductContext } from '../Context/ProductsContext';
import { useContext, useState} from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';


// COMPONENTS
import { ProductBox } from './ProductBox';
export default function ProductsPage() { 

    const { myProducts , loading} = useContext(ProductContext);
    const [ ShowSearch, setShowSearch ] = useState(false);
    
    console.log(myProducts);

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

    

        const handleClose = () => {
            setShowSearch(false);
        }

        const handleOpen = () => {
            setShowSearch(true);
        }

    return (
        <div className='flex flex-col gap-10'>          
            
            <div className='flex flex-col items-start gap-7'>
                
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
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onClick={() => handleOpen()}
            >
            <SearchIcon />
            </Fab>

      {/* Modal for Search       
           <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={ShowSearch}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography>
                        Search Products
                    </Typography>

                    <TextField id="outlined-basic" label="Search.." variant="outlined" />
 
                </Box>
            </Modal>

         */}

            <div className='flex flex-col items-center gap-2'>
                    <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 w-[80%]'>
                        {loading ? (
                            <Typography variant="h1" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center"}}> 
                                Loading Products...
                            </Typography>
                        ) : (
                            myProducts.map(product => (
                                <NavLink to={`/products/${product.id}`} key={product.id} className={""}>
                                        <ProductBox product={product} />
                                </NavLink>
                            ))
                        )}
                    </div>
            </div>
        </div>
    )
}