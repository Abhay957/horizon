import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/mock-api" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
