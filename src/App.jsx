import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import "./App.css";
import MainToDo from "./components/todo/main/MainToDo";
import Stopwatch from "./components/stopWatch/StopWatch";
import Progress from './components/progress/Progress';
import SkeletonExample from "./components/skeleton/SkeletonExample";
import FlavorSelector from "./components/creatableSelect/FlavorSelector";
import SearchableSelect from "./components/searchable/SearchableSelect";
import FunctionalComponentTimer from "./components/timerFunctionalComponent/FunctionalComponentTimer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<MainToDo />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/skeleton" element={<SkeletonExample />} />
        <Route path="/searchable" element={<SearchableSelect />} />
        <Route path="/creatable-select" element={<FlavorSelector />} />
        <Route path="/functional-timer" element={<FunctionalComponentTimer />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;