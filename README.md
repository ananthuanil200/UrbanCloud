

# 🌤️ UrbanCloud – Weather + City Facts + Images

UrbanCloud is a **mini Angular project** that fetches real-time weather data, fun city facts, and beautiful city images using free public APIs.
It demonstrates **API calls, component communication, RxJS, Angular standalone components, and responsive UI design**.

---

## 🚀 Features

* 🌍 Search for any city and get **live weather info**.
* 💡 Displays a **random fun fact** about the city.
* 🖼️ Shows a **city image** from Unsplash.
* ⚡ Built with **Angular Standalone Components** (no NgModules).
* 🎨 Sleek UI with gradient background + bold “UrbanCloud” branding.

---

## 📸 Demo

https://drive.google.com/file/d/16TncZ1GqA8Slqa4o2Wb5_AHuTTvdA8Xr/view?usp=drive_link


## 🛠️ Tech Stack

* **Angular 17+ (Standalone Components)**
* **RxJS** for handling async data
* **OpenWeather API** (Weather info)
* **Unsplash API** (City images)
* **City Facts API** (Optional fun facts)

---

## 📂 Project Structure

```
src/
 ├── app/
 │   ├── components/
 │   │   ├── search/              # Search input component
 │   │   ├── weather-display/     # Weather card component
 │   ├── services/                # API services
 │   ├── app.component.ts         # Root component (with inline facts & images)
 │   ├── app.component.html
 │   ├── app.component.css
 ├── assets/
 ├── main.ts
```

---

## 🔑 API Keys Setup

1. **Get free API keys**:

   * [OpenWeatherMap](https://openweathermap.org/api)
   * [Unsplash Developers](https://unsplash.com/developers)

2. Add them in `src/environments/environment.ts`

```ts
export const environment = {
  openWeatherApiKey: 'YOUR_OPENWEATHER_KEY',
  unsplashApiKey: 'YOUR_UNSPLASH_KEY'
};
```

---

## ▶️ Running the Project

```bash
# Install dependencies
npm install

# Start the Angular dev server
ng serve
```

Open **[http://localhost:4200](http://localhost:4200)** in your browser 🎉


---

## 👨‍💻 Author

* **Ananthu** – Developer & Project Lead

---

✨ Enjoy exploring the skies with **UrbanCloud**!

---



