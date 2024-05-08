// import {TruckImg} from "../assets/images"
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-custom-blue text-2xl  text-center font-spaceGrotesk w-[80%] sm:text-4xl md:mt-[70px] md:leading-[108%] 
        md:-tracking-[4px] lg:w-[50%] lg:text-6xl "  >
        Гъвкави решения за сухопътен транспорт за всеки клиент
      </h1>
      <div className="mt-5 max-w-[90%] lg:mt-[60px]">
        <img src="truck.png" alt="truckImg" width={969} height={690}>
        </img>
      </div>
    </section>
  )
}

export default Hero