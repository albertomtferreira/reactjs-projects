import './App.css';
import Accordian from './components/accordian/accordian.component';
import ColorGenerator from './components/color_generator/color_generator.component';
import ImageSlider from './components/image_slider/image_slider.component';
import LoadMoreButton from './components/load_more_button/load_more_button.component';
import QRCodeDetails, { AccordianDetails, ColorGeneratorDetails } from './components/app-details/app-details-component';
import QrCodeComponent from './components/qr_code_generator/qr_code_generator.component';
import StarRating from './components/star_rating/star_rating.component';
import menus from './components/tree_view/data';
import TreeView from './components/tree_view/tree_view.component';

function App() {
  return (
    <div className="App">
      {/* QR Code Generator Component */}
      <QRCodeDetails />
      <QrCodeComponent />

      {/* Tree View Component */}
      <h1 className='app-titles'>Tree View</h1>
      <TreeView menus={menus} />

      {/* Load More */}
      <h1 className='app-titles'>Load More</h1>
      <LoadMoreButton />

      {/* Image Slider Component */}
      <h1 className='app-titles'>Image Slider</h1>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />

      {/* Star Rating Component */}
      <h1 className='app-titles'>Star Rating</h1>
      <StarRating numberOfStars={10} />

      {/* Color Generator Component */}
      <ColorGeneratorDetails />
      <ColorGenerator />

      {/* Accordian Component       */}
      <AccordianDetails />
      <Accordian />
    </div>
  );
}

export default App;
