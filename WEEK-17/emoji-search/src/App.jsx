import "./App.css";
import EmojiList from "./components/EmojiList";
import Search from "./components/Search";

function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <h1>😎 EmojiSearch 😎</h1>
        <Search />
        <EmojiList />
      </div>
    </div>
  );
}

export default App;
