import Router from "./routes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="app" style={{maxWidth: 520, margin: "auto"}}>
      {/* <Header /> */}
      <Router />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
