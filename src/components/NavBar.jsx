import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Inicio", target: "hero" },
        { name: "Menu", target: "menu" },
        { name: "Nosotros", target: "nosotros" },
        { name: "Reservas", target: "reservas" },
        { name: "Contacto", target: "footer" },
    ];

    const handleScroll = (id) => {
        setIsOpen(false);
        gsap.to(window, {
            duration: 1.2,
            scrollTo: {
                y: `#${id}`,
                offsetY: 80
            },
            ease: "power3.inOut"
        });
    };

    return (
        <nav className="sticky top-0 z-50 flex w-full h-20 justify-between items-center bg-neutral-900 px-6">
            <div className="item title">
                <h2
                    onClick={() => handleScroll("hero")}
                    className="main-title text-dorado text-2xl font-lg hover:cursor-pointer tracking-wider"
                >
                    LA MESA
                </h2>
            </div>

            <div className="text-white">
                {!isOpen && (
                    <button className="md:hidden" onClick={() => setIsOpen(true)}>
                        <IoIosMenu className="text-dorado size-10 hover:cursor-pointer" />
                    </button>
                )}

                <div className={`z-50 fixed top-0 flex flex-col md:flex-row justify-between pl-10 pt-10 md:p-0 h-screen md:h-auto w-70 md:w-full bg-neutral-900 md:bg-transparent transition-all duration-300 ${isOpen ? "right-0" : "-right-full"} md:static`}>
                    <ul className="flex flex-col gap-5 md:flex-row">
                        {navLinks.map((link) => (
                            <li
                                key={link.target}
                                className="nav-item text-crema py-2 px-3 hover:bg-white/10 rounded-2xl hover:cursor-pointer tracking-wider transition-colors"
                                onClick={() => handleScroll(link.target)}
                            >
                                {link.name}
                            </li>
                        ))}
                    </ul>
                    <button className="md:hidden self-end mr-5" onClick={() => setIsOpen(false)}>
                        <IoClose className="text-dorado size-10" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)} />
            )}
        </nav>
    );
}