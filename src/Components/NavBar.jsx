// HOOKS
import { useEffect } from 'react';

// MUI 
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// ROUTER
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// GSAP
import { gsap } from 'gsap';

// #EDE4E3
export default function NavBar() {



    return(
        <div className='flex flex-col'>
            <div className="w-full h-[80px] bg-[#dbdbdb] text-white flex flex-row justify-center items-center" style={{borderBottom:"solid 1px #3B3B3B", justifyContent:"space-around"}}>

                {/*==== LEFT SECTION - SHOP NAME ====*/}
                <div className="flex w-[30%]">
                    <Typography variant="h3" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald"}}>
                        IMEX.SH
                    </Typography>
                </div>

                {/*==== CENTER SECTION - NAVIGATION ====*/}
                <div className="w-[50%] flex justify-center items-center">

                        <NavLink to="/" className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2 btn1" style={{textDecoration:"none", fontFamily:"Montserrat"}}>HOME</NavLink>

                        <NavLink to="/products" className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>PRODUCTS</NavLink>

                        <NavLink to="/about" className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>ABOUT</NavLink>

                        <NavLink to="/contact" className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>CONTACT</NavLink>

                </div>

                
                
            </div>
            
            {/*==== OUTLET FOR ROUTES ====*/}

                <Outlet />                

            {/*==== FOOTER ====*/}
            <div className='bg-[#161616] flex flex-col p-1.5 justify-center items-center text-[#dbdbdb]'>

                    <Typography variant="h7" gutterBottom={false}>
                        @2025 IMEX.SH. All rights reserved.
                    </Typography>
                    
                    <Typography variant="h7" gutterBottom={false} className='text-center'>             
                        IMEX.SH is a fictitious company created for educational purposes only.
                    </Typography>

                    <Typography variant="h7" gutterBottom={false} className='text-center'>      
                        This website is not intended for commercial use.
                    </Typography>      
                
            </div>
            
        </div>    
    )
}