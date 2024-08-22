# 📰 **News Feeder**

Welcome to **News Feeder**! This React.js application fetches the latest news articles from the [News API](https://newsapi.org/) and presents them with a clean, modern interface. The app is designed to be both attractive and responsive, ensuring a great user experience on all devices.

## 🚀 **Features**

- **📡 Live News Feed:** Get real-time updates from various news sources.
- **🗂️ Category Filters:** Browse news by categories such as Technology, Sports, Business, and more.
- **🔍 Search Functionality:** Quickly news sources.
- **🌐 Responsive Design:** Optimized for both desktop and mobile devices.
- **✨ UI Themes:** Toggle between light and dark modes.
- **🌀 Custom Scroll Bar:** Enhanced scrolling experience with a custom-designed scroll bar.
- **⏳ Preloader:** A stylish preloader animation while news data is being fetched.

## 💻 **Prerequisites**

Ensure you have the following:

- **Node.js** and **npm** installed
- A valid API key from [News API](https://newsapi.org/) (sign up for a free key)

## 📦 **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/news-feeder.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd news-feeder
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root directory with your News API key:

   ```env
   REACT_APP_NEWS_API_KEY=your_news_api_key_here
   ```

5. **Start the Development Server**

   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your browser to view the app.

## 🌟 **UI Options**

### **1. Light and Dark Modes**

Toggle between light and dark themes from the settings menu.

### **2. Grid and List Views**

Choose your preferred view for articles: grid for a visual layout with images or list for a streamlined text-based format.

### **3. Customizable Layouts**

Adjust the layout to your preference:

- **Sidebar Position:** Choose between left or right sidebar.
- **Font Sizes:** Customize font sizes for readability.

## 🖥️ **Usage**

- **📂 Browse Categories:** Filter news by category using the sidebar.
- **📰 View Articles:** Click headlines to read full articles.
- **🔎 Search Articles:** Use the search bar to find specific news topics.

## 📂 **Project Structure**

- `src/`
  - `components/` - Reusable UI components 
  - `App.js` - Main component with routing and theming
  - `App.css` - CSS and styling files
  - `index.js` - Entry point of the React application

## 🔧 **API Integration**

  - Data fetching from the News API is managed in `src/components/Newslist.js` using Axios.
  - Data fetching from the News API is managed in `src/components/SoourceSelector.js` using Axios.

## 🤝 **Contributing**

We welcome contributions! To contribute:

- Fork the repository
- Create a new branch (`git checkout -b feature/your-feature`)
- Commit your changes (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Open a Pull Request

## 🙌 **Acknowledgements**

- [News API](https://newsapi.org/) for providing the news data.
- [React.js](https://reactjs.org/) for the amazing UI library.

---
