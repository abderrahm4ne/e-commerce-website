// MUI
import Typography from '@mui/material/Typography';


export default function Product({ product }) {
    return ( 
            
                <div className="w-[17%] h-[470PX] bg-[#dbdbdb] m-2 p-4 rounded-lg shadow-md flex flex-col">

                    <img src={`../public/DB/${product.id}/1.jpg`} alt="productimg" width={"360px"} className=' self-center' style={{borderRadius:"5px"}}/>

                    <div className="p-4">
                        <Typography variant="h5" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", color:"#3B3B3B",letterSpacing:"-1px" }}>
                            {product.article}
                        </Typography>

                        <Typography variant="h6" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", color:"#3B3B3B",letterSpacing:"-1px" }}>
                            {product.name}
                        </Typography>

                        <Typography variant="h6" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", color:"#3B3B3B",letterSpacing:"-1px" }}>
                            {product.reference}
                        </Typography>

                        <Typography variant="h6" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", color:"#3B3B3B",letterSpacing:"-1px" }}>
                            {product.description}
                        </Typography>

                        <Typography variant="h6" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", color:"#3B3B3B",letterSpacing:"-1px" }}>
                            {product.color}
                        </Typography>

                        <Typography variant="h6" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", color:"#3B3B3B",letterSpacing:"-1px" }}>
                            {product.Category}
                        </Typography>

                        <Typography variant="h6" gutterBottom={false} style={{fontFamily:"Special Gothic Condensed One", color:"#3B3B3B",letterSpacing:"-1px" }}>
                            {product.series}
                        </Typography>
                    </div>
                </div>

    )
}