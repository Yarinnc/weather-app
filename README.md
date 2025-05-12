# Weather App

A modern weather application built with React, TypeScript, and Vite that displays current weather conditions and forecasts.

## Features

- Current weather information
- 5-day forecast
- Search for cities worldwide
- Toggle between metric and imperial units

## Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn
- OpenWeather API key (get one from [OpenWeather](https://openweathermap.org/api))

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd weather-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your OpenWeather API key:
   ```
   VITE_WEATHER_API_KEY=your_openweather_api_key_here
   ```
   Replace `your_openweather_api_key_here` with your actual API key.

4. Start the development server:
   ```
   npm run dev
   ```
   The app will be available at http://localhost:5173

## Building for Production

To build the app for production:

```
npm run build
```

To preview the production build:

```
npm run preview
```

## Technologies Used

- React 18
- TypeScript
- Redux Toolkit
- Material UI
- Vite
- OpenWeather API
