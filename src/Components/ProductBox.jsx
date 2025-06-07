// MUI 
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';



export function ProductBox({ product }) {
  return (
    <div className="flex flex-col items-center justify-center  rounded-lg border-1 transition duration-300 ease-in-out hover:border-3 hover:shadow-lg p-3 h-auto" >

      <img 
          src={`../public/DB/${product.id}/productPage.png`} 
          alt={product.name} 
          className="w-[90%] h-[90%] rounded-lg m-2 border-1 border-black">
      </img> 


      <div className="flex flex-col items-center justify-center gap-3 ">
        
        <div 
          className="h-auto break-words p-2 w-full 2xl:text-2xl xl:text-xl  lg:text-xl md:text-xl sm:text-md text-xl "
          style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}
        >
          {product.name}

        </div>

        <div className="h-auto 2xl:text-3xl xl:text-xl  lg:text-xl md:text-xl sm:text-md text-xl "
        style={{ fontFamily: "Oswald", color: "#CD7F32", textAlign: "center" }}>
          Price : 123444DZD
        </div>

      </div>

      <button
        className="w-full bg-[#3B3B3B] text-[#dbdbdb] py-4 text-2xl mt-4 rounded-lg 2xl:text-2xl xl:text-2xl md:text-md sm:text-sm sm:text-md">
          ADD TO CART
        </button>
    </div>
  );
}
