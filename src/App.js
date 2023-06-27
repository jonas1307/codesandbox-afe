import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Blog />
    </div>
  );
}
