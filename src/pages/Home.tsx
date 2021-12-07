import "./Page.css";
import ExamplePlot from "../plots/ExamplePlot";

function HomePage() {
  return (
    <div>
      <header className="Page">
        <h2>Home</h2>
        <ExamplePlot />
      </header>
    </div>
  );
}

export default HomePage;
