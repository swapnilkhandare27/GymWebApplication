import './App.css';
import Hero from './components/Hero';
import Program from './components/program/program';
import Reasons from './components/reasons/reasons';
import Plans from './components/plans/plans';
import Testimonial from './assets/Testimonial/Testimonial';
import Join from './components/Join/join';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
