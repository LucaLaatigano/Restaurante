import { useState } from "react"
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const container = useRef()
    return (
        <nav ref={container} className="sticky top-0 z-30 flex w-full h-20 justify-between items-center bg-neutral-900 px-6">
            <div className="item title">
                <h2 className="main-title text-dorado text-2xl font-lg hover:cursor-pointer tracking-wider">LA MESA</h2>
            </div>

            <div className="text-white">
                {!isOpen && (
                    <button className="item" onClick={() => setIsOpen(true)}>
                        <IoIosMenu className="text-dorado size-10 hover:cursor-pointer hover:bg-amber-500/20 rounded-2xl 
                        md:hidden
                        " />
                    </button>
                )}
                <div className={`z-40 fixed flex justify-between pl-10 pt-10 h-screen w-70 bg-neutral-900 gap-5 ${isOpen ? "right-0" : "-right-full"} 
                md:static md:right-0 md:h-auto md:w-full md:pb-2 top-0 md:pt-0
                
                `}>
                    <div>
                        <ul className="flex flex-col gap-5 md:flex-row">
                            <li className="nav-item text-md flex items-center text-crema w-auto py-2 hover:bg-white/10 px-3 rounded-2xl hover:cursor-pointer tracking-wider" onClick={() => setIsOpen(false)}>Inicio</li>
                            <li className="nav-item text-md flex items-center text-crema w-auto py-2 hover:bg-white/10 px-3 rounded-2xl hover:cursor-pointer tracking-wider" onClick={() => setIsOpen(false)}>Menu</li>
                            <li className="nav-item text-md flex items-center text-crema w-auto py-2 hover:bg-white/10 px-3  rounded-2xl hover:cursor-pointer tracking-wider" onClick={() => setIsOpen(false)}>Nosotros</li>
                            <li className="nav-item text-md flex items-center text-crema w-auto py-2 hover:bg-white/10 px-3 rounded-2xl hover:cursor-pointer tracking-wider" onClick={() => setIsOpen(false)}>Reservas</li>
                            <li className="nav-item text-md flex items-center text-crema w-auto py-2 hover:bg-white/10 px-3 rounded-2xl hover:cursor-pointer tracking-wider" onClick={() => setIsOpen(false)}>Contacto</li>
                        </ul>
                    </div>
                    <div className="mr-5 mt-0.5" >
                        <button onClick={() => setIsOpen(false)}>
                            <IoClose className="text-dorado size-10 hover:cursor-pointer hover:bg-amber-500/20 rounded-2xl
                            md:hidden
                            " />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-30 bg-neutral-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            )}
        </nav>
    )
}