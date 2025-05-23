// MUI
import Typography from '@mui/material/Typography';


export default function Product({ product }) {
    return ( 
            
                <div className="w-[17%] h-[470PX] bg-[#dbdbdb] m-2 p-4 rounded-lg shadow-md flex flex-col">
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