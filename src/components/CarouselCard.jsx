import { useState } from 'react';

const CarouselCard = () => {
  
  const testimonials = [
    {
      id: 1,
      name: "Artem Jones",
      image: "https://i.pravatar.cc/150?u=artem",
      text: "roadmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images. It's amazing to see how much impact it has had on millions of lives since then."
    },
    {
      id: 2,
      name: "Jackie Mackle",
      image: "https://i.pravatar.cc/150?u=jackie",
      text: "I find myself recommending roadmap.sh to all the internees or junior developers. It's a great way to skill up and grow in your career."
    },
    {
      id: 3,
      name: "Sarah Smith",
      image: "https://i.pravatar.cc/150?u=sarah",
      text: "I have been solving all the project ideas and I am surprised how far I have come. Highly recommended for anyone starting their tech journey!"
    }
  ];

  // State to track the active person
  const [index, setIndex] = useState(0);

  //  Navigation functions
  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-4xl border border-gray-900 rounded-[2.5rem] p-12 bg-white flex flex-col items-center shadow-sm">
      {/* Dynamic Text */}
      <p className="text-gray-700 text-center text-lg leading-relaxed mb-10 max-w-2xl">
        {testimonials[index].text}
      </p>

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <button onClick={prevSlide} className="text-2xl font-bold hover:scale-125 transition-transform p-2 cursor-pointer">
          &lt;
        </button>

        <div className="flex items-center gap-4">
          {testimonials.map((person, idx) => {
            const isActive = idx === index;
            // Only show active and immediate neighbors for the visual look
            const isVisible = idx === index || idx === index - 1 || idx === index + 1 || 
                             (index === 0 && idx === testimonials.length - 1) || 
                             (index === testimonials.length - 1 && idx === 0);

            if (!isVisible) return null;

            return (
              <img
                key={person.id}
                src={person.image}
                className={`rounded-full transition-all duration-500 ease-in-out ${
                  isActive 
                    ? "w-20 h-20 border-2 border-gray-900 scale-110 opacity-100" 
                    : "w-12 h-12 opacity-30 grayscale scale-90"
                }`}
                alt={person.name}
              />
            );
          })}
        </div>

        <button onClick={nextSlide} className="text-2xl font-bold hover:scale-125 transition-transform p-2 cursor-pointer">
          &gt;
        </button>
      </div>

      {/* Dynamic Name */}
      <h3 className="font-bold text-xl text-gray-900 mt-2">
        {testimonials[index].name}
      </h3>
    </div>
  );
};

export default CarouselCard;