import ProductsPage from "../Components/ProductsPage";

export default function ProductsPageRouter() { 
    return (
        <div style={{
                backgroundImage: "linear-gradient(90deg, #9f9f9f, #ffd7d7 60%)", padding:"20px"
              }} className=" p-10">
            <ProductsPage />
        </div>     
    )
}