import logo from './logo.svg';
import './App.css';
import KellyTours from "./KellyTours"; // Import the main component
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


function App() {
  return (
    <div className="App">
      <KellyTours />
    </div>
  );
}

export default App;
