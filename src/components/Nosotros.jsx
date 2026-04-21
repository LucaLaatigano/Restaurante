import { useMealsContext } from "../contexts/MealsContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Nosotros({ id }) {
    const { meals, loading } = useMealsContext();
    const container = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useGSAP(() => {
        if (loading || !leftRef.current || !rightRef.current) return;

        const mm = gsap.matchMedia();

        mm.add("(max-width: 767px)", () => {
            gsap.from(leftRef.current, {
                opacity: 0,
                yPercent: 30,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
            gsap.from(rightRef.current, {
                opacity: 0,
                yPercent: 30,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
        });

        mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
            gsap.from(leftRef.current, {
                opacity: 0,
                xPercent: -60,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
            gsap.from(rightRef.current, {
                opacity: 0,
                xPercent: 60,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
        });

        mm.add("(min-width: 1024px)", () => {
            gsap.from(leftRef.current, {
                opacity: 0,
                xPercent: -100,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
            gsap.from(rightRef.current, {
                opacity: 0,
                xPercent: 100,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
        });

        ScrollTrigger.refresh();

        return () => mm.revert();

    }, { scope: container, dependencies: [loading] });

    if (loading) {
        return (
            <div className="h-screen bg-neutral-900 w-full flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-dorado border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    const ultimoPlato = meals && meals.length > 0 ? meals.at(-1) : null;

    const stats = [
        { num: "40", label: "AÑOS" },
        { num: "+80", label: "PLATOS" },
        { num: "12", label: "PRODUCTORES" },
    ];

    return (
        <section id={id} ref={container} className="min-h-screen md:h-[80vh] mb-15 bg-neutral-900 w-full overflow-x-hidden shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.4)] relative z-10">
            <div className="w-full h-full flex flex-col md:flex-row items-stretch">
                <div ref={leftRef} className="w-full h-80 md:h-full md:flex-1 flex justify-center bg-neutral-800 overflow-hidden">
                    {ultimoPlato ? (
                        <img
                            src={ultimoPlato.strMealThumb}
                            alt={ultimoPlato.strMeal}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-dorado border-t-transparent rounded-full animate-spin" />
                        </div>
                    )}
                </div>
                <div ref={rightRef} className="py-10 px-6 md:px-12 flex flex-col justify-center gap-6 md:flex-1 bg-neutral-900">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-dorado text-lg md:text-xl font-medium tracking-[0.2em] uppercase">
                            Nuestra Historia
                        </h3>
                        <h2 className="text-crema text-3xl md:text-6xl font-semibold leading-tight tracking-wider">
                            CUATRO DÉCADAS <br /> DE SABOR
                        </h2>
                    </div>

                    <p className="max-w-md text-claro text-md md:text-lg leading-relaxed opacity-80">
                        Desde 1985 abrimos nuestras puertas con una misión simple:
                        cocinar bien, con ingredientes honestos y técnica aprendida
                        de generación en generación.
                    </p>

                    <div className="flex flex-wrap gap-8 md:gap-12 mt-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <span className="text-dorado text-2xl md:text-4xl font-bold tracking-tighter">
                                    {stat.num}
                                </span>
                                <span className="text-white/40 text-[10px] md:text-xs font-light tracking-[0.15em] uppercase">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 