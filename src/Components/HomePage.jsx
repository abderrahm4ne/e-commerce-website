// MUI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// ROUTER 
import { NavLink } from 'react-router-dom';


export default function HomePage() {
  return (
    <div className='bg-amber-200 flex flex-row items-center justify-center lg:w-[100%] md:w-[70%] sm:w-[50%] gap-3'>
    
        <div className="flex flex-col justify-center items-start bg-amber-400">

            <div style={{padding:"10px", fontWeight:"bold", color:"#3B3B3B", fontFamily:"Oswald"}} className='text-1xl lg:text-4xl md:text-3xl sm:text-2xl'>
                ORDER YOUR PRODUCTS NOW!
            </div>

            <div style={{marginLeft:"30px", marginBottom:"35px", color:"#CD7F32", fontFamily:"Oswald"}} className='text-md lg:text-2xl md:text-2xl sm:text-md'>
                Discover amazing products and deals in Our Algerian store..!
            </div>

            <NavLink to="/products" style={{textDecoration:"none"}} className="w-full md:w-auto">
                <Button variant="contained" sx={{
                backgroundColor: "#3B3B3B",
                fontFamily: "Oswald",
                color: "#CD7F32",
                px: 3, // horizontal padding
                py: 1.5, // vertical padding
                width: '100%' // full width inside the NavLink
                }}>
                    ORDER NOW

                </Button>
            </NavLink>
            
            
        </div>


        <div className="w-[40%]">
            <img src="../public/DB/1/1.jpg" alt="negro" style={{borderRadius:"12px", boxShadow:"-10px 10px 10px rgba(0, 0, 0, 0.5)"}} />
        </div>


    </div>
  );
}