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

    const animatebutton = (btn) => {
        gsap.fromTo(`.${btn}`, {scale:1}, {scale:0.9, duration:0.2, ease:"power1.inOut", yoyo:true, repeat:1});  
    };


    return(
        <>
            <div className="w-full h-[8%] bg-[#dbdbdb] text-white flex items-center px-5" style={{borderBottom:"solid 1px #3B3B3B"}}>

                {/*==== LEFT SECTION - SHOP NAME ====*/}
                <div className="flex-1">
                    <Typography variant="h3" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald"}}>
                        IMEX.SH
                    </Typography>
                </div>

                {/*==== CENTER SECTION - NAVIGATION ====*/}
                <div className="flex justify-center">
                    <div className='flex flex-row'>

                        <NavLink to="/" onClick={() => animatebutton("btn1")} className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2 btn1" style={{textDecoration:"none", fontFamily:"Montserrat"}}>HOME</NavLink>

                        <NavLink to="/products" onClick={() => animatebutton("btn2")} className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>PRODUCTS</NavLink>

                        <NavLink to="/about" onClick={() => animatebutton("btn3")} className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>ABOUT</NavLink>

                        <NavLink to="/contact" onClick={() => animatebutton("btn4")} className="text-[#3B3B3B] hover:text-[#3B3B3B] font-bold text-md mx-2" style={{textDecoration:"none", fontFamily:"Montserrat"}}>CONTACT</NavLink>

                    </div>
                </div>

                {/*==== RIGHT SECTION - SEARCH BAR ====*/}
                <div className="flex-1 flex justify-end ">
                    <div className='flex flex-row gap-2'>
                    <TextField
                            id="outlined-basic"
                            label="Search"
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                height: '40px',
                                width: '250px',
                                alignItems: 'center',
                                color: '#3B3B3B',
                                },
                                '& .MuiInputBase-input': {
                                padding: '8px 10px',
                                fontSize: '1.5rem',
                                fontFamily: 'Oswald',
                                },
                                '& .MuiInputLabel-root': {
                                color: '#3B3B3B',
                                transform: 'translate(14px, 9px) scale(1)',
                                '&.MuiInputLabel-shrink': {
                                    transform: 'translate(14px, -9px) scale(0.75)',
                                    color: '#3B3B3B',
                                    fontFamily: 'Oswald',
                                }
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#3B3B3B', // Border color
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#3B3B3B', // Hover border color
                                },
                                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#3B3B3B', // Focused border color
                                }
                            }}
                />
                        <Button variant="contained" sx={{backgroundColor:"#3B3B3B"}}>SEARCH</Button>
                    </div>
                </div>
                
            </div>
            
            <Outlet />

            <div className='bg-[#161616] h-[10%] flex flex-col gap-0 justify-center items-center text-[#dbdbdb]'>
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
        </>    
    )
}