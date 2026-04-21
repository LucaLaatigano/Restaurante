export default function Footer() {
    return (
        <footer className="w-full bg-negro flex flex-col px-5 pt-10 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10">

                <div className="flex flex-col gap-3">
                    <span className="font-cormorant text-xs uppercase text-dorado tracking-widest">
                        LA MESA
                    </span>
                    <p className="text-claro text-xs md:text-sm tracking-wider leading-relaxed">
                        Restaurante de cocina artesanal en el corazón de Salta.{" "}
                        <span className="hidden md:inline">
                            Tradición, producto local y amor por la buena mesa
                        </span>{" "}
                        desde 1985.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-dorado text-xs tracking-[0.25em] uppercase ">
                        Contacto
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-claro text-xs md:text-sm tracking-wider">Alberdi 520, Salta Capital</li>
                        <li className="text-claro text-xs md:text-sm tracking-wider">(387) 421-0000</li>
                        <li className="text-claro text-xs md:text-sm tracking-wider">info@lamesa.com.ar</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-dorado text-xs tracking-[0.25em] uppercase">
                        Horarios
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-claro text-xs md:text-sm tracking-wider">Lun – Vie: 12:00 – 23:30</li>
                        <li className="text-claro text-xs md:text-sm tracking-wider">Sáb – Dom: 11:30 – 00:00</li>
                        <li className="text-claro text-xs md:text-sm tracking-wider opacity-60">Feriados: Consultar</li>
                    </ul>
                </div>

            </div>

            <hr className="border-t border-crema opacity-20" />

            <p className="text-center text-claro text-xs tracking-wider mt-5 opacity-50">
                © 2026 La Mesa Restaurante · Todos los derechos reservados
            </p>
        </footer>
    )
}