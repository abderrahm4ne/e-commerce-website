// MUI 
import { Typography } from "@mui/material";

export function ProductBox({ product }) {
  return (
    <div className="flex flex-col items-center justify-center">

      <img 
          src={`../public/DB/${product.id}/productPage.png`} 
          alt={product.name} 
          className="w-[250px] h-[250px] rounded-lg m-2">
      </img> 


      <div>
        <Typography 
          variant="h5" 
          gutterBottom={false} 
          style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}
          className="h-[60px] px-2"
          >
          {product.name}
        </Typography>
        <Typography 
          variant="h5" 
          gutterBottom={false} 
          style={{ fontFamily: "Oswald", color: "#3B3B3B", textAlign: "center" }}
          className="h-[50px] px-2"
          >
          {product.id}
        </Typography>
      </div>
    </div>
  );
}
