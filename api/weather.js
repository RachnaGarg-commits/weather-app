export default async function handler(req, res) {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({
            error: "City is required"
        });
    }

    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
        return res.status(500).json({
            error: "Weather API key is not configured"
        });
    }

    try {
        const apiUrl =
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            error: "Failed to fetch weather data"
        });
    }
}