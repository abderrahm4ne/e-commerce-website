import { createContext, useEffect , useState } from "react";
import axios from "axios";




export const ProductContext = createContext();

export const ProductProvider = ({ children }) => { 
    const [myProducts, setMyProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    {/*==== axios ====*/}
        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await axios.get('../public/DB/products.json');
                    setMyProducts(response.data);
                } 
                catch (error) {
                    console.error("Error fetching products:", error);
                }
                finally {
                    setLoading(false);
                }
            };

            fetchProducts();
         }, []);
    {/*==== axios ====*/}
    
    return(
        <ProductContext.Provider value={{ myProducts, setMyProducts, loading}}>
            {children}
        </ProductContext.Provider>
    )
}