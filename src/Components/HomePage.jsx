// MUI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// ROUTER 
import { NavLink } from 'react-router-dom';


export default function HomePage() {
  return (
    <>
    
        <div className="flex flex-col mb-[150px] justify-center items-start w-[40%] ">
            <Typography variant="h3" gutterBottom={false} style={{padding:"10px", fontWeight:"bold", color:"#3B3B3B", fontFamily:"Oswald"}}>
                ORDER YOUR PRODUCTS NOW!
            </Typography>
            <Typography variant="h5"  gutterBottom={false} style={{marginLeft:"30px", marginBottom:"35px", color:"orange", fontFamily:"Oswald"}}>
                Discover amazing products and deals in Our Algerian store..!
            </Typography>
            <NavLink width="100%" to="/products" style={{textDecoration:"none"}}>
                <Button variant="contained" sx={{backgroundColor:"#3B3B3B", fontSize:"2rem", fontFamily:"Oswald", color:"orange", marginLeft:"10px", padding:"12px 20px ", width:"150%"}}>SEARCH TO ORDER</Button>
            </NavLink>
            

        </div>
        <div className="w-[40%] mt-[140px]">
            <img src="../public/DB/1/1.jpg" alt="negro" style={{borderRadius:"12px", boxShadow:"-10px 10px 10px rgba(0, 0, 0, 0.5)"}}/>
        </div>
    </>
  );
}