const ContactUs = () => {
  return (
    <section className="flex justify-center items-center flex-col bg-slate-700 w-full h-full pb-10">
      <h1 className="font-semibold text-white text-2xl text-center font-spaceGrotesk w-[80%] sm:text-4xl md:mt-[70px] md:leading-[108%] 
      md:-tracking-[4px] lg:w-[50%] lg:text-6xl">Готови ли сте да работим заедно?</h1>
      <p className="text-center mt-5 text-white w-[50%] leading-[170%] text-xl">Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
      
      <div className="flex justify-center items-center rounded-lg bg-white lg:p-5 p-2">
        <img src="email.png" className="mr-2"></img><input type="text" placeholder="Мобилен Телефон "
          className=""></input>
        <button className=" hover:bg-green-700 bg-btnGreen text-semibold text-inter md:text-lg text-sm rounded-r-lg ">
          Изпрати
        </button>
      </div>
    </section>
  )
}

export default ContactUs