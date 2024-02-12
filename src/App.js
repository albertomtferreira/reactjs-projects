import './App.css';
import Accordian from './components/accordian/accordian.component';
import ColorGenerator from './components/color_generator/color_generator.component';
import ImageSlider from './components/image_slider/image_slider.component';
import LoadMoreButton from './components/load_more_button/load_more_button.component';
import StarRating from './components/star_rating/star_rating.component';
import menus from './components/tree_view/data';
import TreeView from './components/tree_view/tree_view.component';

function App() {
  return (
    <div className="App">
      {/* Tree View Component */}
      <TreeView menus={menus} />

      {/* Load More */}
      <LoadMoreButton />

      {/* Image Slider Component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />

      {/* Star Rating Component */}
      <StarRating numberOfStars={10} />

      {/* Color Generator Component */}
      <ColorGenerator />

      {/* Accordian Component       */}
      <Accordian />
    </div>
  );
}

export default App;
