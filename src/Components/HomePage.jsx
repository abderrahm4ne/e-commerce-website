// MUI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// ROUTER 
import { NavLink } from 'react-router-dom';


export default function HomePage() {
  return (
    <div className='flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center lg:w-[100%] md:w-[70%] sm:w-[50%] gap-3'>
    
        <div className="flex flex-col justify-center items-start mr-6">

            <div style={{padding:"10px", fontWeight:"bold", color:"#3B3B3B", fontFamily:"Oswald"}} className='text-1xl lg:text-4xl md:text-3xl sm:text-2xl'>
                ORDER YOUR PRODUCTS NOW!
            </div>

            <div style={{marginBottom:"35px", color:"#CD7F32", fontFamily:"Oswald"}} className='text-md lg:text-2xl md:text-2xl sm:text-md'>
                Discover amazing products and deals in Our Algerian store..!
            </div>

            <NavLink to="/products" style={{textDecoration:"none"}} className="w-[100%]">
                <button style={{
                backgroundColor: "#3B3B3B",
                width: "100%",
                borderRadius: "12px",
                fontFamily: "Oswald",
                border:"1px solid black",
                color: "#CD7F32",
                padding: "10px",
                }}
                className='text-[1.2rem] lg:text-[1.7rem] md:text-[1.5rem] sm:text=[1.2rem]'
                >
            VIEW PRODUCTS

                </button>
            </NavLink>
            
            
        </div>


        <div className="lg:w-auto md:w-auto w-[80%]">
            <img src="../public/DB/1/1.jpg" alt="negro" style={{borderRadius:"12px", boxShadow:"-10px 10px 10px rgba(0, 0, 0, 0.5)"}} />
        </div>


    </div>
  );
}