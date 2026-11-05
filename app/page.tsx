import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import ComoFunciona from "@/components/landing/ComoFunciona";
import Seguros from "@/components/landing/Seguros";
import PorQue from "@/components/landing/PorQue";
import Equipo from "@/components/landing/Equipo";
import Contacto from "@/components/landing/Contacto";
import Footer from "@/components/landing/Footer";
import FadeUpObserver from "@/components/landing/FadeUpObserver";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <ComoFunciona />
      <Seguros />
      <PorQue />
      <Equipo />
      <Contacto />
      <Footer />
      <FadeUpObserver />
    </>
  );
}
