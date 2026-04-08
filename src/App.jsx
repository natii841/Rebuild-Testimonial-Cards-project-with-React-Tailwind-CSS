import SpeechCard from "./components/SpeechCard";
import BorderCard from "./components/BorderCard";
import ImageCard from "./components/ ImageCard";
import DarkCard from "./components/DarkCard";
import CarouselCard from "./components/CarouselCard";

export default function App() {
  return (
    <div className="bg-gray-50 p-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <SpeechCard />
        <BorderCard />
        <ImageCard />
        <DarkCard />
       <div className="md:col-span-2">
     <CarouselCard />
   </div>

      </div>
    </div>
  );
}


 
  