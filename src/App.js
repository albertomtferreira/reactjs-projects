import './App.css';
import Accordian from './components/accordian';
import ColorGenerator from './components/color_generator/color_generator.component';
import StarRating from './components/star_rating/star_rating.component';

function App() {
  return (
    <div className="App">
      {/* Star Rating Component */}
      <StarRating numberOfStars={10}/>

      {/* Color Generator Component */}
      <ColorGenerator/>

      {/* Accordian Component       */}
      <Accordian/>
    </div>
  );
}

export default App;
