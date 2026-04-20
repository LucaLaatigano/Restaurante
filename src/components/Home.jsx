import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Nosotros from "./Nosotros";
import Menu from "./Menu";
import Reservas from './Reservas';

export default function Home() {

    useEffect(() => {
        const onLoad = () => {
            setTimeout(() => ScrollTrigger.refresh(), 200);
        };

        if (document.readyState === "complete") {
            setTimeout(() => ScrollTrigger.refresh(), 200);
        } else {
            window.addEventListener("load", onLoad);
            return () => window.removeEventListener("load", onLoad);
        }
    }, []);

    return (
        <div className="w-full min-h-screen">
            <NavBar />
            <div>
                <Hero id="hero" />
                <Menu id="menu" />
                <Nosotros id="nosotros" />
                <Reservas id="reservas" />
                <Footer id="footer" />
            </div>
        </div>
    );
}