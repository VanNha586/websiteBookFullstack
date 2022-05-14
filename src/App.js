import "./App.css";
import Header from "~/components/Layout/Header";
import Content from "~/components/Layout/Content";
import Footer from "~/components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
