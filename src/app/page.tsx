import { Hero, Content, ContactUs, Services } from "./sections/Index";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center background-color-white">
      <section > <Nav></Nav></section>
     <section id="home"><Hero></Hero></section>
     <section id="about-us" className="flex flex-col items-center justify-center"><Content></Content></section>
     <section id="contact-us" className="w-full h-full"> <ContactUs></ContactUs></section>
     <section id="services"> <Services></Services></section>
    
      
     
     
    </main>
  );
}
