import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { Outlet } from 'react-router-dom';
// #EDE4E3
export default function NavBar() {

          

    return(
        <>
            <div className="w-full h-[7%] bg-[#dbdbdb] text-white flex justify-between items-center px-5" style={{borderBottom:"solid 1px #3B3B3B"}}>

                {/*==== SHOP NAME ====*/}
                <Typography variant="h3" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold"}}>
                    IMEX.SH
                </Typography>
                {/*==== SHOP NAME ====*/}

                {/*==== NAVIGATION ====*/}
                <div className='flex flex-row justify-self-center-safe'>
                    
                    <Box >
                        <Button
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#3B3B3B', display: 'block', fontWeight:"bold", fontSize:"1.1rem"}}
                        >
                            Home
                        </Button>
                    </Box>
                    <Box >
                        <Button
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#3B3B3B', display: 'block', fontWeight:"bold", fontSize:"1.1rem"}}
                        >
                            Products
                        </Button>
                    </Box>
                    <Box >
                        <Button
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#3B3B3B', display: 'block', fontWeight:"bold", fontSize:"1.1rem"}}
                        >
                            About
                        </Button>
                    </Box>
                    <Box >
                        <Button
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#3B3B3B', display: 'block', fontWeight:"bold", fontSize:"1.1rem"}}
                        >
                            Contact
                        </Button>
                    </Box>

                </div>

                {/*==== NAVIGATION ====*/}
        
                {/*==== SEARCH BAR ====*/}
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
                                },
                                '& .MuiInputLabel-root': {
                                color: '#3B3B3B', // Label color
                                transform: 'translate(14px, 9px) scale(1)',
                                '&.MuiInputLabel-shrink': {
                                    transform: 'translate(14px, -9px) scale(0.75)',
                                    color: '#3B3B3B', // Ensures label stays dark when shrunk
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
                {/*==== SEARCH BAR ====*/}
                
            </div>
            
            <Outlet />
        </>    

    )
}