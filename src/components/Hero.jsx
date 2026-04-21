import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'


export default function Hero({ id }) {
    const stats = [
        { num: "12:00-23:00", label: "LUN-VIE" },
        { num: "11:00-00:00", label: "SAB-DOM" },
        { num: "3875661422", label: "RERSEVAS" },
    ]
    useGSAP(() => {
        gsap.from(".hero-item", {
            y: 100,
            duration: 1.5,
            stagger: 0.3,
            ease: "power2.inOut",
            opacity: 0
        })
    }, [])


    return (
        <section id={id} className="relative h-screen w-full bg-neutral-900 overflow-hidden">
            <div className="absolute inset-0 bg-line opacity-[0.08] pointer-events-none" />
            <div className="relative z-10 flex justify-center pt-15 md:19">
                <div className="flex flex-col gap-8">
                    <div className='flex justify-center'>
                        <span className="hero-item text-dorado text-lg sm:text-xl md:text-2xl tracking-widest">RESTAURANTE · SALTA</span>
                    </div>
                    <div className="flex justify-center">
                        <h2 className="hero-item text-5xl md:text-7xl text-crema font-md tracking-widest">LA MESA</h2>
                    </div>
                    <div className='flex justify-center'>
                        <span className="hero-item text-dorado text-lg sm:text-xl md:text-2xl tracking-widest">COCINA ARTESANAL · DESDE 1985</span>
                    </div>
                    <div className="hero-item flex justify-center">
                        <button className="w-30 h-10 md:w-40 md:h-15 border rounded-3xl border-crema text-crema hover:bg-white/10 hover:cursor-pointer">
                            <a href="../assets/carta" download="menu-la-mesa">VER MENÚ</a>
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 divide-y md:grid-cols-3 md:divide-y-0 md:divide-x divide-white/30 pt-2 md:mt-15 w-70 md:w-screen px-2'>
                            {stats.map(({ num, label }) => (
                                <div key={label} className="hero-item flex flex-col items-center gap-2 px-4">
                                    <span className="text-white/40 uppercase text-center mt-5 tracking-wider">{label}</span>
                                    <span className="text-dorado text-xl font-light mb-5 tracking-wider">{num}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}