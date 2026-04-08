export default function BorderCard() {
  return (
    <div className="border border-gray-900 rounded-[2.5rem] p-6 flex flex-col justify-between">
      <p className="text-sm text-gray-800">
        Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family
      </p>
      <div className="flex items-center gap-3 mt-4">
        <img src="https://i.pravatar.cc/100?u=artem" alt="Artem Jones" className="w-12 h-12 rounded-full"/>
        <div>
          <div className="font-semibold text-sm">Artem Jones</div>
          <div className="text-gray-500 text-xs">Junior Frontend Developer</div>
        </div>
      </div>
    </div>
  )
}