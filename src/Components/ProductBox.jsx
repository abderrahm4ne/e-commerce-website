// MUI 
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';



export function ProductBox({ product }) {
  return (
    <div className="flex flex-col items-center justify-center  rounded-lg border-1 transition duration-300 ease-in-out hover:border-3 hover:shadow-lg p-3 bg-amber-600" >

      <img 
          src={`../public/DB/${product.id}/productPage.png`} 
          alt={product.name} 
          className="w-[90%] h-[90%] rounded-lg m-2 border-1 border-black">
      </img> 


      <div className="flex flex-col items-center justify-center gap-3 bg-amber-500">
        <div 
          className="h-[60px] px-2 w-[100%] 2xl:text-xl lg:text-sm md:text-sm sm:text-sm text-sm"
          style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}
        >
          {product.name}

        </div>

        

      </div>
    </div>
  );
}
