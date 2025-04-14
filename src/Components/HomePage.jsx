import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';


export default function HomePage() {
  return (
    <div className="flex flex-row gap-10 justify-center-safe bg-[#fbf2f2] w-full h-full p-10">
        <div className="flex flex-col mb-[150px] justify-center items-start w-[40%] ">
            <Typography variant="h3" gutterBottom={false} style={{padding:"10px", fontWeight:"bold"}}>
                ORDER YOUR PRODUCTS NOW!
            </Typography>
            <Typography variant="h5"  gutterBottom={false} style={{marginLeft:"30px", marginBottom:"5px", fontWeight:"lighter"}}>
                Discover amazing products and deals!
            </Typography> 
            <button className='bg-[#3B3B3B] text-[#fbf2f2] text-5xl font-light py-4 px-5 rounded mt-5 hover:bg-[#3B3B3B] transition duration-300 ease-in-out' style={{borderRadius:"12px", boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.2)", marginLeft:"30px", marginBottom:"20px"}}>
                
                    Explore Products
                
            </button>
        </div>
        <div className="w-[40%] mt-[140px]">
            <img src="../public/DB/1-BDC032-NG/BDC032_NG-SUECIA-AMBIENTE.jpg" alt="negro" style={{borderRadius:"12px", boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.2)"}}/>
        </div>
    </div>
  );
}