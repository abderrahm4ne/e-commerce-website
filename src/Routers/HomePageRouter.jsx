import HomePage from "../Components/HomePage";

export default function HomePageRouter() {

    return(
            <div style={{
                backgroundImage: "linear-gradient(90deg, #9f9f9f, #ffd7d7 60%)",
              }}
              className="flex flex-row gap-10 justify-center-safe w-[100%] p-10 h-[95vh]">

                    <HomePage />
                    
            </div>         
    )
}