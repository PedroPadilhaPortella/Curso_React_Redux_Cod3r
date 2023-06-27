import { Route, Routes } from "react-router-dom";
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
import Param from '../../views/examples/Param';
import './Content.css';

export default function Content() {
  return (
    <main className='Content'>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}