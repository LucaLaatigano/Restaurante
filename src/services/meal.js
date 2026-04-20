const ENDPOINT = "https://www.themealdb.com/api/json/v1/1/"

export const mealsData = async (amount = 6) => {
    const data = Array.from({ length: amount }, () =>
        fetch(`${ENDPOINT}random.php`).then(res => res.json()) // Agregamos () al .json()
    );
    const results = await Promise.all(data);
    return results.map(result => result.meals[0]);
}