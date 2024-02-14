import './App.css';
import Accordian from './components/accordian/accordian.component';
import ColorGenerator from './components/color_generator/color_generator.component';
import ImageSlider from './components/image_slider/image_slider.component';
import LoadMoreButton from './components/load_more_button/load_more_button.component';
import DescriptionBanner, { DummyData } from './components/app-details/description-banner.component';
import QrCodeComponent from './components/qr_code_generator/qr_code_generator.component';
import StarRating from './components/star_rating/star_rating.component';
import menus from './components/tree_view/data';
import TreeView from './components/tree_view/tree_view.component';
import dummyData from './components/app-details/dummy-data';

function App() {
  return (
    <div className="App">
      {/* <DummyData dummyData={dummyData} /> */}
      {/* QR Code Generator Component */}
      <DescriptionBanner option="qrcode" />
      <QrCodeComponent />

      {/* Tree View Component */}
      <DescriptionBanner option="tree_view" />
      <TreeView menus={menus} />

      {/* Load More */}
      <DescriptionBanner option="load_more_button" />
      <LoadMoreButton />

      {/* Image Slider Component */}
      <DescriptionBanner option="image_slider" />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />

      {/* Star Rating Component */}
      <DescriptionBanner option="star_rating" />
      <StarRating numberOfStars={10} />

      {/* Color Generator Component */}
      <DescriptionBanner option="color_generator" />
      <ColorGenerator />

      {/* Accordian Component       */}
      <DescriptionBanner option="accordion" />
      <Accordian />
    </div>
  );
}

export default App;
