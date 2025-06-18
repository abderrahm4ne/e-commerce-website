// MUI
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Fab } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



// React Components

// OTHER LIBRARIES
import gsap from 'gsap';

// CONTEXT
import { ProductContext } from '../Context/ProductsContext';
import { useContext, useState} from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';


// COMPONENTS
import { ProductBox } from './ProductBox';
export default function ProductsPage() { 

    const { myProducts , loading} = useContext(ProductContext);
    const [ ShowSearch, setShowSearch ] = useState(false);
    
    console.log(myProducts);

    const style = {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: '#dfdfdf',
                    border: '1px solid #000000',
                    boxShadow: 24,
                    borderRadius: '8px',
                    p: 4,
                    };

    

        const handleSwitch = () => {
            setShowSearch(!ShowSearch);
        }

        const [filteredInputs, setFilteredInputs] = useState({
            name:"",
            reference:"",
            category:"",
            color:"",
            series:""
        })

        const [activeFilters, setActiveFilters] = useState({
            name: "",
            reference: "",
            category: "",
            color: "",
            series: ""
        });

        const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilteredInputs((prev) => ({ ...prev, [name]: value }));
        };

        const filteredProducts = myProducts.filter(p => {
            const matchesName = activeFilters.name ? p.name.toLowerCase().includes(activeFilters.name.toLowerCase()) : true;
            const matchesCategory = activeFilters.category ? p.category === activeFilters.category : true;
            const matchesReference = activeFilters.reference ? p.reference.toLowerCase().includes(activeFilters.reference.toLowerCase()) : true;
            const matchesColor = activeFilters.color ? p.color === activeFilters.color : true;
            const matchesSeries = activeFilters.series ? p.series === activeFilters.series : true;

            return matchesName && matchesCategory && matchesColor && matchesReference && matchesSeries;
        });

        

    return (
        <div className={`flex flex-col gap-10 ${filteredProducts.length ? "flex" : "h-[100vh]"}`}>          
            
            <div className={`flex flex-col items-start gap-7`}>
                
                <Typography variant="h3" gutterBottom={false} sx={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"}} className=''>
                    PRODUCTS PAGE
                </Typography>
                      
            </div>
            
            <Fab
            sx={{
                position: 'fixed',
                bottom: 20,
                left: 20,
                zIndex: 9999,
                backgroundColor: '#3B3B3B',
                color: "#dbdbdb",
                ":hover":{
                    color: "#dbdbdb",
                    backgroundColor: "#3B3B3B",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onClick={() => handleSwitch()}
            >
            <SearchIcon />
            </Fab>

           <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={ShowSearch}
                className='self-center'
            >
                <div className=' py-7 px-5 w-[60%] justify-self-center rounded-2xl border-2 border-black' style={{fontFamily:"Oswald", backgroundColor:"rgba(219, 219, 219, 0.5)"}}>
                    <div className='flex flex-col p-3 gap-3 items-center'>
                    <div className='flex lg:flex-row md:flex-row flex-col items-center lg:gap-3 md:gap-3 gap-1.5 w-full'>
                        <span className='lg:w-[17%] md:w-[17%] self-center lg:text-2xl md:text-xl text-md' style={{ textShadow: "0px 1px 2px black" }}>PRODUCT NAME</span>
                        <input
                        name="name"
                        type="text"
                        value={filteredInputs.name}
                        onChange={handleInputChange}
                        className='w-[80%] lg:px-3 lg:py-2 md:px-3 md:py-2 sm:p-1.5 p-1.5 lg:text-2xl md:text-2xl sm:text-xl text-md  border-1 border-[#3b3b3b] outline-none rounded-sm'
                        />
                    </div>

                    <div className='flex lg:flex-row md:flex-row flex-col items-center lg:gap-3 md:gap-3 gap-1.5 w-full'>
                        <span className='lg:w-[17%] md:w-[17%] self-center lg:text-2xl md:text-xl text-md' style={{ textShadow: "0px 1px 2px black" }}>PRODUCT REFERENCE</span>
                        <input
                        name="reference"
                        type="text"
                        value={filteredInputs.reference}
                        onChange={handleInputChange}
                        className='w-[80%] lg:px-3 lg:py-2 md:px-3 md:py-2 sm:p-1.5 p-1.5 lg:text-2xl md:text-2xl sm:text-xl text-md  border-1 border-[#3b3b3b] outline-none rounded-sm'
                        />
                    </div>

                    <div className='flex flex-row gap-3 w-full'>
                        <span className='w-[17%] self-center text-2xl' style={{ textShadow: "0px 1px 2px black" }}>PRODUCT CATEGORY</span>
                        <input
                        name="category"
                        type="text"
                        value={filteredInputs.category}
                        onChange={handleInputChange}
                        className='w-[80%] px-3 py-3 text-2xl border-1 border-[#3b3b3b] outline-none rounded-sm'
                        />
                    </div>

                    <div className='flex flex-row gap-3 w-full'>
                        <span className='w-[17%] self-center text-2xl' style={{ textShadow: "0px 1px 2px black" }}>PRODUCT COLOR</span>
                        <select
                        name="color"
                        value={filteredInputs.color}
                        onChange={handleInputChange}
                        className='w-[80%] px-3 py-3 text-2xl border-1 border-[#3b3b3b] outline-none rounded-sm'
                        >
                        <option value="">All Colors</option>
                        <option value="NEGRO">NEGRO</option>
                        <option value="GOLD">GOLD</option>
                        <option value="CROMO">CROMO</option>
                        <option value="NEGRO-GOLD">NEGRO-GOLD</option>
                        </select>
                    </div>

                    <div className='flex flex-row gap-3 w-full'>
                        <span className='w-[17%] self-center text-2xl' style={{ textShadow: "0px 1px 2px black" }}>PRODUCT SERIES</span>
                        <select
                        name="series"
                        value={filteredInputs.series}
                        onChange={handleInputChange}
                        className='w-[80%] px-3 py-3 text-2xl border-1 border-[#3b3b3b] outline-none rounded-sm'
                        >
                        <option value="">All Series</option>
                        <option value="Seucia">Seucia</option>
                        <option value="Pisa">Pisa</option>
                        <option value="Art">Art</option>
                        <option value="Monza">Monza</option>
                        <option value="Java">Java</option>
                        <option value="Volga">Volga</option>
                        <option value="Dublin">Dublin</option>
                        <option value="Sumatra">Sumatra</option>
                        <option value="Catanias">Catanias</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Berna">Berna</option>
                        <option value="Irlanda">Irlanda</option>
                        <option value="Munich">Munich</option>
                        </select>
                    </div>

                    <button 
                    className='text-3xl bg-[#3b3b3b] text-[#dbdbdb] px-4 py-3 rounded-md w-[20%]'
                    onClick={() => {
                        setActiveFilters(filteredInputs);
                        setShowSearch(false);
                    }}>
                        SEARCH
                    </button>
                    </div>


                </div>
            </Modal>


            <div className={`flex ${filteredProducts.length != 0 ? "flex-col" : "items-center"} items-center gap-2 ${ShowSearch ? 'blur-sm' : 'flex'} `}>
                    <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 w-[80%] '>
                        {loading  ? (
                            <Typography variant="h1" gutterBottom={false} style={{color:"#3B3B3B", fontWeight:"bold", fontFamily:"Oswald", textAlign:"center"}}> 
                                Loading Products...
                            </Typography>
                        ) : (
                            filteredProducts.length === 0 ? (<div><h1 className='text-4xl font-bold  self-center text-center'>NO PRODUCT MATCHES WERE FOUND</h1>
                            <button className='bg-[#dbdbdb] px-5 py-2.5 rounded-md text-2xl hover:cursor-pointer' onClick={() => {
                                const resetFilters = {
                                                    name: "",
                                                    reference: "",
                                                    category: "",
                                                    color: "",
                                                    series: ""
                                                    };
                                setFilteredInputs(resetFilters);
                                setActiveFilters(filteredInputs);
                            }}>BACK</button></div>) :
                            filteredProducts.map(product => (
                                <NavLink to={`/products/${product.id}`} key={product.id} className={""}>
                                        <ProductBox product={product} />
                                </NavLink>
                            ))
                        )}
                        
                    </div>
            </div>
        </div>
    )
}