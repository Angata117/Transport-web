const Content = () => {
  return (
    <section className="flex flex-col justify-center items-center lg:w-[60%] w-[80%]  p-10">
      <div className="flex flex-col">
        <div className="justify-center items-center">
          <h2 className="font-space-grotesk font-semibold leading-[115%] text-custom-blue lg:text-5xl md:text-3xl sm:text-xl text-l mb-9 mt-5">Решения</h2>
          <p className="font-inter lg:text-xl  text-custom-blue leading-[170%]" >
            Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.
          </p>
          <p className=" mt-10 font-inter lg:text-xl  text-custom-blue leading-[170%]">
            Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.
          </p>
          <ul className="list-disc font-inter lg:text-xl lg:ml-8 ml-5 text-custom-blue">
            <li className="">Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)</li>
            <li>Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;</li>
            <li>Взимане на стоки и доставки за от и в България;</li>
            <li>Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;</li>
            <li>Регулярни групажни линии;</li>
            <li>Транспортни услуги до Турция и Близкия изток;</li>
            <li>Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.</li>
          </ul>
        </div>
        <h2 className="font-space-grotesk font-semibold leading-[115%] text-custom-blue lg:text-5xl md:text-3xl sm:text-xl text-l mb-9 mt-10">Предимства</h2>
        <p className="font-inter lg:text-xl  text-custom-blue leading-[170%]" >
          Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.
        </p>
        <p className=" mt-10 font-inter lg:text-xl  text-custom-blue leading-[170%]">
          Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.
        </p>
      </div>
    </section>
  )
}

export default Content