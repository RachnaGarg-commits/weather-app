🌦️ Weather App

A clean and responsive weather application built with HTML, CSS, and Vanilla JavaScript that provides real-time weather information for any city using the OpenWeatherMap API.

The project is currently focused on fetching and displaying weather data, with plans to evolve it into an AI-powered weather assistant in the future.

---

✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 💧 Display humidity
- ☁️ Display weather conditions
- 🌤️ Dynamic weather emojis based on weather condition
- ⚡ Real-time weather data
- 📱 Responsive user interface
- ❌ Error handling for invalid cities
- 🔐 API key protected using Vercel Environment Variables
- 🚀 Deployed with Vercel

---

🛠️ Tech Stack

Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)

API

- OpenWeatherMap API

Deployment

- Vercel

Security

- Vercel Serverless Functions
- Environment Variables

---

📂 Project Structure

weather-app/
│
├── api/
│   └── weather.js
│
├── index.html
├── index.js
├── styles.css
├── .gitignore
└── README.md

---

⚙️ How It Works

The application follows a simple client-server architecture.

User
  ↓
Enter City
  ↓
Frontend (HTML + CSS + JavaScript)
  ↓
/api/weather
  ↓
Vercel Serverless Function
  ↓
OpenWeatherMap API
  ↓
Weather Data
  ↓
Weather Card

The OpenWeatherMap API key is stored securely as a Vercel Environment Variable instead of exposing it directly in the frontend code.

---

🔐 Environment Variable

The project uses the following environment variable:

WEATHER_API_KEY

This variable should be configured in your Vercel project settings.

«⚠️ Never commit your API key directly to GitHub.»

---

🚀 Run Locally

1. Clone the repository

git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git

2. Navigate into the project

cd weather-app

3. Install Vercel CLI

npm install -g vercel

4. Start the development server

vercel dev

5. Open the local application

Open the local URL provided by Vercel in your browser.

---

🌐 Live Demo

🔗 Live Website:
YOUR-VERCEL-LINK-HERE

---

🤖 Future Improvements — AI Integration

This project is currently a traditional weather application, but the long-term goal is to transform it into an AI-powered weather assistant.

Planned AI Features

🧠 AI Weather Assistant

Allow users to ask natural-language questions such as:

«"Is it a good day to go for a walk?"»

«"What should I wear today?"»

«"Will the weather be comfortable for travelling?"»

The AI could combine weather data with the user's question and provide a personalized response.

---

☔ Smart Weather Recommendations

Instead of only displaying weather numbers, the application could generate recommendations such as:

- 👕 What to wear
- ☂️ Whether to carry an umbrella
- 🏃 Whether outdoor activities are suitable
- 🚗 Whether driving conditions may require extra caution
- 🌅 Whether it is a good time for outdoor activities

---

💬 AI Chat Interface

Add a chatbot where users can interact with their weather data.

Example:

User:
Will I need an umbrella in Patna today?

AI:
There is a high chance of rain this afternoon,
so carrying an umbrella would be a good idea.

---

📊 AI Weather Insights

The application could analyze forecast data and provide:

- Daily summaries
- Weekly weather insights
- Temperature trends
- Rain probability analysis
- Extreme weather alerts

---

🎯 Personalized Weather Experience

Future versions could allow users to select preferences such as:

☑ Outdoor activities
☑ Travel
☑ College commute
☑ Fitness
☑ Photography

The AI could then tailor weather recommendations accordingly.

---

🗺️ Roadmap

- [x] Build basic weather interface
- [x] Connect OpenWeatherMap API
- [x] Add city search
- [x] Display temperature and humidity
- [x] Add weather condition indicators
- [x] Add error handling
- [x] Deploy application on Vercel
- [x] Move API key to secure server-side environment variable
- [ ] Add weather forecast
- [ ] Add geolocation-based weather
- [ ] Add search history
- [ ] Add charts and weather trends
- [ ] Add AI weather assistant
- [ ] Add natural-language weather queries
- [ ] Add personalized AI recommendations
- [ ] Add weather alerts

---

📚 What I Learned

Building this project helped me understand:

- Working with REST APIs
- Using asynchronous JavaScript
- Using "fetch()" and Promises
- Handling API responses
- DOM manipulation
- Error handling
- Working with environment variables
- Serverless functions
- Deploying a web application using Vercel
- Protecting API credentials

---

🔮 Vision

The goal of this project is to evolve from a simple weather application into an AI-powered personal weather assistant that doesn't just tell users the weather, but helps them understand what the weather means for their plans.

«From "What's the weather?" to "What should I do because of the weather?"»

---

👩‍💻 Author

Rachna Garg

B.Tech CSE Student

Interested in Web Development, Software Development and AI.

Connect With Me

- GitHub: https://github.com/RachnaGarg-commits
- LinkedIn: https://www.linkedin.com/in/rachna-garg-321994363?utm_source=share_via&utm_content=profile&utm_medium=member_android

---

⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.
