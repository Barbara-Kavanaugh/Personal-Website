import "./App.css"
import "./index.css"
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}{" "}
      <div 
        className={`min-h-screen transition-opacity duration-700 
          ${isLoading ? "opacity-100" : "opacity-0"} 
          bg-black text-gray-100`}
      >
        <Navbar />
      </div>
    </>
  );
}


export default App;