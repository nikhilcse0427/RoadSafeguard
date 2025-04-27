# RoadSafeguard Dashboard

A modern, professional web dashboard for reporting and tracking road incidents, built with React and Tailwind CSS.

## 🚀 Getting Started

### Live Demo(Hosted URL)
- [https://road-safeguard-yho4.vercel.app](https://road-safeguard-yho4.vercel.app)

### 1. Clone the repository
```bash
# Clone this repository
git clone -  https://github.com/nikhilcse0427/RoadSafeguard.git
cd RoadSafeguard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm start
```

- The app will be available at [http://localhost:3000](http://localhost:3000)

### 4. Data
- Incident data is stored in `public/incidents.json`.
- You can edit this file to add, remove, or update incidents.

## 🛠️ Tech Stack
- **Language:** JavaScript
- **Framework:** React (with functional components and hooks)
- **Styling:** Tailwind CSS
- **Charts:** Recharts

## 📦 Project Structure
- `src/` — React components and main app logic
- `public/incidents.json` — Incident data (served as a static file)

## 📝 Design Decisions & Challenges
- **Modern UI:** Used Tailwind CSS for rapid, responsive, and modern design.
- **Data Handling:** All incident data is loaded from a static JSON file for simplicity. In a real-world app, this would be replaced with a backend API.
- **Expandable Details:** Each incident in the lists has a "View Details" toggle for a clean, user-friendly experience.
- **Charts:** Used Recharts for professional, interactive data visualization.
- **Challenge:** Since the app is static (no backend), new reports are not persisted after a page reload. For production, a backend API would be needed.


