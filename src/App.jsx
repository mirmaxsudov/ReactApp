import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home/Home";
import MainToDo from "./components/10/todo/MainToDo";
import Progress from './components/10/progress/Progress';
import Stopwatch from './components/10/stopWatch/StopWatch';
import SkeletonExample from './components/10/skeleton/SkeletonExample';
import SearchableSelect from './components/10/searchable/SearchableSelect';
import FlavorSelector from './components/10/creatableSelect/FlavorSelector';
import FunctionalComponentTimer from './components/timerFunctionalComponent/FunctionalComponentTimer';
import ManageUser from "./components/12/ManageUser";
import NotFound from "./components/error/NotFound";
import OnlineCrud from "./components/learn-exam/OnlineCrud";

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
        <Route path="/manage-users" element={<ManageUser />} />
        <Route path="/online-crud" element={<OnlineCrud />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;