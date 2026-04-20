import { useState, useEffect, useContext, createContext } from "react";
import { mealsData } from "../services/meal";
const mealsContext = createContext()

export const useMealsContext = () => useContext(mealsContext)

export const MealsProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getMealsData = async () => {
            try {
                const getData = await mealsData(7)
                setMeals(getData)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getMealsData()
    }, [])
    return <mealsContext.Provider value={{ meals, setMeals, loading }}>
        {children}
    </mealsContext.Provider>
}