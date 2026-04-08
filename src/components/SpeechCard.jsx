export default function SpeechCard() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl relative">
      <p>
        I have been solving all the project ideas on roadmap.sh and I am surprised how far I have come from where I started.
        <br /><br />
        Highly recommended!
      </p>
      <div className="flex items-center gap-3 mt-4">
        <img src="https://i.pravatar.cc/100?u=artem" alt="Artem Jones" className="w-12 h-12 rounded-full"/>
        <div>
          <div className="font-semibold text-sm text-white">Artem Jones</div>
          <div className="text-gray-400 text-xs">Junior Frontend Developer</div>
        </div>
      </div>
      <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-900"></div>
    </div>
  )
}