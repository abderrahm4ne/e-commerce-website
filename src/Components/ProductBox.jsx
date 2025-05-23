export function ProductBox({ product }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full"> 
      <h3 className="font-oswald text-2xl text-white">{product.name}</h3>
      <p className="font-oswald text-xl text-white">{product.price} DA</p>
    </div>
  );
}
