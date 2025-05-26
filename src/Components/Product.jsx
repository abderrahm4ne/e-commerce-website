// MUI
import Typography from '@mui/material/Typography';

// react hooks 
import { useContext } from 'react';
import { useParams } from 'react-router-dom';


// components
import { ProductContext } from '../Context/ProductsContext';

export default function Product() {

    // CONTEXT
    const { myProducts , loading} = useContext(ProductContext);
    const { id } = useParams();
    return ( 
            
        <div className='flex flex-col items-center justify-center gap-10'>
      {loading ? (
        <Typography variant="h2" style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}>
          Loading...
        </Typography>
      ) : (
        <>
          <Typography
            variant="h3"
            gutterBottom={false}
            sx={{
              color: "#3B3B3B",
              fontWeight: "bold",
              fontFamily: "Oswald",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
            }}
          >
            PRODUCT DETAILS
          </Typography>
          <div className='flex flex-col items-center justify-center gap-10'>
            <Typography variant='h4' style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}>
              {myProducts[id].name}          
            </Typography>
            <Typography variant='body1' style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}>
                  {myProducts[id].article}
            </Typography>
            <Typography variant='body1' style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}>
                  {myProducts[id].category}
            </Typography>
            <Typography variant='body1' style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}>
                  {myProducts[id].color}
            </Typography>
          </div>
        </>
      )}
    </div>
          
    )}