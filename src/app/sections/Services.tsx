const Services = () => {
  return (
    <section className="flex flex-col p-10">
      <div className="justify-self-start flex-row">
        <h2 className="flex-row font-space-grotesk font-semibold leading-[115%] text-custom-blue lg:text-5xl md:text-3xl sm:text-xl text-lg  mt-10">Други услуги</h2>
      </div>
      <ul className="flex md:flex-row flex-col justify-start gap-4 mt-10 p-5">
        <li>
          <img src="danger-cargo.png" alt="danger-cargo"
          className="rounded-xl hover:scale-105 duration-300"></img>
          <p className="text-custom-blue text-semibold md:text-2xl text-lg text-space-grotesk leading-[140%]">Опасни товари (ADR)</p>
        </li>
        <li>
          <img src="fridge.png" alt="fridge"
          className="rounded-xl hover:scale-105 duration-300"></img>
            <p className="text-custom-blue text-semibold md:text-2xl text-lg text-space-grotesk leading-[140%]">Хладилен транспорт</p>
        </li>
        <li>
          <img src="cargos.png" alt="cargos"
          className="rounded-xl hover:scale-105 duration-300"></img>
            <p className="text-custom-blue text-semibold md:text-2xl text-lg text-space-grotesk leading-[140%]">Извънгабаритни товари</p>
        </li>
      </ul>
      {/* <div className="flex-row justify-start
      ">
      <img src="danger-cargo.png"></img>
      <img src="fridge.png"></img>
      <img src="cargos.png"></img>
      </div> */}
    </section>
  )
}

export default Services