import ProductsPage from "../Components/ProductsPage";

export default function ProductsPageRouter() { 
    return (
        <div style={{backgrundImage: "linear-gradient(120deg, #fbf2f2, #3B3B3B 60%)",
            padding:"20px"}} className=" p-10 bg-red-600">
            <ProductsPage />
        </div>     
    )
}