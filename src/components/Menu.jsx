import { useState, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { faker } from '@faker-js/faker'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMealsContext } from "../contexts/MealsContext"
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Menu({ id }) {
    const { meals, loading } = useMealsContext()
    const [prices] = useState(
        Array.from({ length: 6 }, () => faker.number.int({ min: 10000, max: 20000 }))
    )
    const containerRef = useRef(null)
    useGSAP(() => {
        const container = containerRef.current
        if (!container) return

        const mm = gsap.matchMedia()

        mm.add("(max-width: 767px)", () => {
            const titles = gsap.utils.toArray(".menu-title", container)
            gsap.from(titles, {
                x: -100,
                duration: 1,
                ease: "power2.inOut",
                opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            })
        })

        mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
            const titles = gsap.utils.toArray(".menu-title", container)
            const [first, second, line] = titles

            gsap.from(first, {
                x: -100,
                duration: 0.5,
                ease: "power2.inOut",
                opacity: 0,
                scrollTrigger: {
                    trigger: container,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            })
            gsap.from(second, {
                x: 100,
                duration: 1,
                ease: "power2.inOut",
                opacity: 0,
                scrollTrigger: {
                    trigger: container,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            })
            gsap.from(line, {
                x: 200,
                duration: 1.5,
                ease: "power2.inOut",
                opacity: 0,
                scrollTrigger: {
                    trigger: container,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            })
        })

        mm.add("(min-width: 1024px)", () => {
            const titles = gsap.utils.toArray(".menu-title", container)
            gsap.from(titles, {
                x: -100,
                duration: 1,
                ease: "power2.inOut",
                opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            })
        })

        ScrollTrigger.refresh()
        return () => mm.revert()

    }, { scope: containerRef, dependencies: [] })

    useGSAP(() => {
        if (!meals.length || loading) return

        const container = containerRef.current
        if (!container) return

        const mm = gsap.matchMedia()

        mm.add("(max-width: 767px)", () => {
            const cards = gsap.utils.toArray(".cards", container)
            cards.forEach(card => {
                gsap.from(card, {
                    x: -100,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.out",
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                })
            })
        })

        mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
            const leftCards = gsap.utils.toArray(".card-left", container)
            const rightCards = gsap.utils.toArray(".card-right", container)

            leftCards.forEach(card => {
                gsap.from(card, {
                    x: -150,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                })
            })

            rightCards.forEach(card => {
                gsap.from(card, {
                    x: 150,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                })
            })
        })

        mm.add("(min-width: 1024px)", () => {
            const cards = gsap.utils.toArray(".cards", container)
            gsap.from(cards, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.in",
                scrollTrigger: {
                    trigger: container,
                    start: "top 95%",
                    toggleActions: "play none none none",
                    invalidateOnRefresh: true,
                }
            })
        })

        ScrollTrigger.refresh()
        return () => mm.revert()

    }, { scope: containerRef, dependencies: [meals, loading] })

    const handleOrder = ({ plate }) => {
        const telefono = "5493875661422";
        const mensaje = `Hola! Me gustaría ordenar el plato: ${plate}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }

    return (
        <section id={id} ref={containerRef} className="min-h-screen bg-white border-t-4 border-dorado pb-16">
            <div className="flex flex-col items-center pt-14 pb-10">
                <p className="menu-title menu-first text-xs tracking-widest text-dorado uppercase font-medium mb-2">
                    Nuestra Carta
                </p>
                <h1 className="menu-title menu-second text-4xl font-light text-negro mb-5 tracking-wide">
                    Platos Destacados
                </h1>
                <div className="menu-title menu-line w-12 h-px bg-dorado" />
            </div>
            {loading ? (
                <div className="flex justify-center items-center mt-40">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-2 border-dorado border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm text-dorado tracking-widest uppercase">Cargando...</p>
                    </div>
                </div>
            ) : (
                <div className="px-8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {meals.slice(0, 6).map((meal, i) => (
                            <div
                                key={meal.idMeal}
                                className={`group cards bg-white border border-amber-200 rounded-xl overflow-hidden
                                           hover:-translate-y-1 hover:border-dorado hover:shadow-[0_8px_24px_rgba(200,151,58,0.15)]
                                           transition-all duration-300 cursor-pointer ${i % 2 === 0 ? "card-left" : "card-right"}`}
                            >
                                <div className="relative h-52 overflow-hidden bg-amber-50">
                                    <img
                                        src={meal.strMealThumb}
                                        alt={meal.strMeal}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {i === 0 && (
                                        <span className="absolute top-3 left-3 bg-dorado text-white text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full">
                                            Popular
                                        </span>
                                    )}
                                    {i === 2 && (
                                        <span className="absolute top-3 left-3 bg-dorado text-white text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full">
                                            Chef
                                        </span>
                                    )}
                                </div>
                                <div className="p-5">
                                    <div className="text-dorado text-xs tracking-wider mb-2">★★★★★</div>
                                    <h3 className="text-negro font-medium text-base mb-1 leading-snug">
                                        {meal.strMeal}
                                    </h3>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                                        {meal.strArea} · {meal.strCategory}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                                        <span className="text-dorado font-medium text-lg">
                                            ${prices[i]?.toLocaleString('es-AR')}
                                        </span>
                                        <button
                                            onClick={() => handleOrder({ plate: meal.strMeal })}
                                            className="text-xs border border-dorado text-dorado px-4 py-1.5 rounded-full
                                                       hover:cursor-pointer hover:bg-dorado hover:text-white transition-colors duration-200 font-medium tracking-wide"
                                        >
                                            Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}