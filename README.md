# 📰 **News Feeder**

Welcome to **News Feeder**! A modern React.js application designed to fetch the latest news articles from the [News API](https://newsapi.org/) and present them in a sleek, responsive interface.

---

![UI Preview](https://github.com/nishitsaha52/News-Feeder/blob/main/Screenshot%202024-08-22%20161927.png)

## 🚀 **Features**

- **📡 Live News Feed:** Stay updated with real-time news from multiple sources.
- **🗂️ Category Filters:** Browse news across various categories like Technology, Sports, Business, etc.
- **🔍 Search Functionality:** Find specific articles quickly with our integrated search bar.
- **🌐 Responsive Design:** Seamlessly optimized for desktop and mobile viewing.
- **✨ UI Themes:** Switch between light and dark modes for your reading comfort.
- **🌀 Custom Scroll Bar:** Enjoy a smooth scrolling experience with our custom-designed scroll bar.
- **⏳ Preloader:** Stylish preloader animation during data fetching for a polished user experience.

## 💻 **Prerequisites**

Ensure you have the following installed:

- **Node.js** and **npm**
- A valid API key from [News API](https://newsapi.org/) (Sign up for a free key)

## 📦 **Installation**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/news-feeder.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd news-feeder
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the root directory with your News API key:

   ```env
   REACT_APP_NEWS_API_KEY=your_news_api_key_here
   ```

5. **Start the Development Server:**

   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your browser to view the app.

## 🌟 **UI Options**

- **Light and Dark Modes:** Toggle between themes from the settings menu.
- **Grid and List Views:** Choose a visual grid layout or a streamlined list format for articles.
- **Customizable Layouts:** 
  - **Sidebar Position:** Place the sidebar on the left or right.
  - **Font Sizes:** Adjust text size for optimal readability.

## 🖥️ **Usage**

- **Browse Categories:** Use the sidebar to filter news by category.
- **View Articles:** Click on headlines to read the full article.
- **Search Articles:** Utilize the search bar to find news on specific topics.

## 📂 **Project Structure**

- **`src/`**
  - `components/` - Reusable UI components.
  - `App.js` - Main component handling routing and theming.
  - `App.css` - Styling and CSS files.
  - `index.js` - Entry point of the React application.

## 🔧 **API Integration**

- Data fetching from the News API is managed using Axios in:
  - `src/components/Newslist.js`
  - `src/components/SourceSelector.js`

## 🤝 **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## 🙌 **Acknowledgements**

- [News API](https://newsapi.org/) for providing the news data.
- [React.js](https://reactjs.org/) for the powerful UI library.

---
