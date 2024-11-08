import Card from "../Card/Card";
import "./slider.scss";
import Slider from "react-slick";
import ImageUrls from "../Common/image/ImageUrls";
import Button from "../Common/Buttons/Buttons";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: false,
    cssEase: "cubic-bezier(0.12, 0.57, 0.63, 0.21)",
    dotsClass: "slider-dots",
    customPaging: (i) => (
      <Button variant="secondary" label={"steppers"} shape={"dot"}></Button>
    ),
  };

  const carouselItems = [
    {
      title:
        "generate mesmerising illustrations & art  images from text.",
      video: ImageUrls.video1,
    },
    {
      title:
        "create High quality images of anything you can imagine in seconds.",
      video: ImageUrls.video2,
    },
    {
      title: "Fine-tuned Image Generating Model",
      video: ImageUrls.video3,
    },
  ];

  const buttonContent = { variant: "secondary", label: "learn more" };
  const heading = { color: "primary-light", variant: "h3" };

  return (
    <div className="slider-wrapper">
      <Slider {...settings} className="slider">
        {carouselItems.map((item, index) => (
          <Card
            key={index}
            item={item}
            cardLabel={"long"}
            contentStyle={"overlay"}
            content={{
                buttonContents:buttonContent,
                heading:heading
            }}
          />
        ))}
      </Slider>
    </div>
  );
}
