// MUI 
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';



export function ProductBox({ product }) {
  return (
    <div className="flex flex-col items-center justify-center  rounded-lg border-1 transition duration-300 ease-in-out hover:border-3 hover:shadow-lg p-3 w-[19vw] h-[100%]" >

      <img 
          src={`../public/DB/${product.id}/productPage.png`} 
          alt={product.name} 
          className="w-[90%] h-[90%] rounded-lg m-2 border-1 border-black">
      </img> 


      <div className="flex flex-col items-center justify-center gap-3">
        <Typography 
          variant="h5" 
          gutterBottom={false} 
          style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}
          className="h-[60px] px-2 w-[100%]"
          >
          {product.name}
        </Typography>

        <button className="border-1 w-[100%] border-[#3b3b3b] bg-[#3B3B3B] text-white py-4 rounded text-xl" sx={{fontFamily: "Oswald"}}>
          GET NOW
        </button>

      </div>
    </div>
  );
}
