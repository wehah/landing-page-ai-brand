import "./styles/App.scss";
import NavBar from "./components/Navigation/NavBar";
import Paper from "./components/Card/Paper";
import ImageSlider from "./components/Slider/ImageSlider";
import Grid from "./components/Layouts/Grid";
import CardDeck from "./components/Layouts/CardDeck";
import Banner from "./components/Layouts/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ImageSlider />
      <Paper />
      <CardDeck />
      <Grid />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
