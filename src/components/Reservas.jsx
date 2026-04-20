import { useState, useRef } from "react"

export default function Reservas() {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")
    const [persons, setPersons] = useState(null)
    const dateRef = useRef(null)

    const handleUp = (e) => {
        e.preventDefault()
        if (persons === null || persons === 0) {
            setPersons(1)
        } else if (persons <= 9) {
            setPersons(persons + 1)
        }
    }

    const handleDown = (e) => {
        e.preventDefault()
        if (persons !== null && persons >= 1) {
            setPersons(persons - 1)
        }
    }

    const handleDateClick = () => {
        if (dateRef.current) {
            dateRef.current.showPicker()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!persons || persons === 0) {
            alert("Seleccioná la cantidad de personas")
            return
        }
        const mensaje = `Hola! Quiero hacer una reserva a nombre de ${name}, el día ${date} a las ${hour}hs para ${persons} persona/s.`
        const mensajeEncoded = encodeURIComponent(mensaje)
        const numero = "5493875221269"
        window.open(`https://wa.me/${numero}?text=${mensajeEncoded}`, "_blank")
    }

    const inputClass = "px-5 py-5 w-full h-15 text-claro bg-neutral-800 outline-none transition-all duration-300 ease-in-out focus:scale-[1.02] rounded-2xl cursor-pointer"

    return (
        <div className="h-auto w-full bg-dorado -mt-20 pb-10">
            <div className="flex flex-col gap-5 justify-center w-full">
                <span className="text-2xl font-light tracking-wider text-negro mt-15 text-center">RESERVA TU LUGAR</span>
                <h3 className="text-4xl font-bold tracking-wider text-negro text-center">Tu Mesa Te Espera</h3>
                <div className="flex justify-center">
                    <div className="w-20 border border-neutral-900/30" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-10 px-4">
                <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        className={inputClass}
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 cursor-pointer" onClick={handleDateClick}>
                            <input
                                ref={dateRef}
                                type="date"
                                className={`${inputClass} w-full`}
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Horario (ej: 20:30)"
                            className={`${inputClass} flex-1`}
                            required
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="flex gap-1 flex-1 w-full">
                            <input
                                type="text"
                                placeholder="Cantidad de personas"
                                className={`${inputClass} flex-1`}
                                required
                                disabled
                                value={persons ?? ""}
                                onKeyDown={(e) => e.preventDefault()}
                            />
                            <div className="flex flex-col gap-1">
                                <button
                                    onClick={handleUp}
                                    className="bg-neutral-800 hover:bg-neutral-700 w-8 h-7 rounded-t-lg transition-colors flex items-center justify-center text-claro"
                                >▲</button>
                                <button
                                    onClick={handleDown}
                                    className="bg-neutral-800 hover:bg-neutral-700 text-claro w-8 h-7 rounded-b-lg transition-colors flex items-center justify-center"
                                >▼</button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="h-15 w-full sm:w-auto px-8 bg-neutral-800 hover:bg-neutral-700 rounded-2xl text-claro tracking-wider transition-colors duration-300 whitespace-nowrap"
                        >
                            RESERVAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}