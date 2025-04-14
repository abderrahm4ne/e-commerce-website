import HomePage from "../Components/HomePage";

export default function HomePageRouter() {

    return(
            <div style={{
                backgroundImage: "linear-gradient(135deg, #fbf2f2, #3B3B3B)",
              }}className="flex flex-row gap-10 justify-center-safe w-[100%] h-full p-10 ">
                    <HomePage />
            </div>         
    )
}