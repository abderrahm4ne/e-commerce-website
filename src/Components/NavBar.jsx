// HOOKS
import { useEffect, useState } from 'react';

// MUI 
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


// ROUTER
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// GSAP
import { gsap } from 'gsap';

// #EDE4E3
export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className='flex flex-col'>
            <div className="w-full h-[80px] bg-[#dbdbdb] text-white flex flex-row justify-center items-center" style={{borderBottom:"solid 1px #3B3B3B", justifyContent:"space-around"}}>

                {/*==== LEFT SECTION - SHOP NAME ====*/}
                <div className="flex w-[30%]">
                    
                        
                            <div style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald"}} className='lg:text-5xl text-3xl'>
                                IMEX.SH
                            </div>
                         
                    
                </div>

                {/*==== CENTER SECTION - NAVIGATION ====*/}
                <div className="hidden lg:flex space-x-6 items-center">

                        <NavLink to="/" className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2 btn1" style={{textDecoration:"none", fontFamily:"Montserrat"}}>HOME</NavLink>

                        <NavLink to="/products" className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>PRODUCTS</NavLink>

                        <NavLink to="/about" className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>ABOUT</NavLink>

                        <NavLink to="/contact" className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>CONTACT</NavLink>

                </div>

                <div className='flex items-center'>
                    <ShoppingCartIcon sx={{color:"#3b3b3b", fontSize:"30px"}}/>
                    
                    <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <CloseIcon sx={{ color: "#3B3B3B", fontSize: "30px" }} />
                        ) : (
                            <MenuIcon sx={{ color: "#3B3B3B", fontSize: "30px" }} />
                        )}
                    </div>
                </div>              
            </div>

            {menuOpen && (
                <div className="flex flex-col lg:hidden bg-[#dbdbdb] px-6 py-4 space-y-3 border-b border-[#3B3B3B]">
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-[#3B3B3B] font-bold" style={{ fontFamily: "Montserrat" }}>HOME</NavLink>
                    <NavLink to="/products" onClick={() => setMenuOpen(false)} className="text-[#3B3B3B] font-bold" style={{ fontFamily: "Montserrat" }}>PRODUCTS</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-[#3B3B3B] font-bold" style={{ fontFamily: "Montserrat" }}>ABOUT</NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-[#3B3B3B] font-bold" style={{ fontFamily: "Montserrat" }}>CONTACT</NavLink>
                </div>
            )}
            
            {/*==== OUTLET FOR ROUTES ====*/}

                <Outlet />                

            {/*==== FOOTER ====*/}
            <div className='bg-[#161616] flex flex-col p-3.5 justify-center items-center text-[#dbdbdb]'>

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