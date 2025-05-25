import Card from "../Card/Card";
import "./slider.scss";
import Slider from "react-slick";
import { ImageUrl } from "../Common/image/ImageUrl";
import Button from "../Common/Buttons/Buttons";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 16000,
    arrows: false,
    cssEase: "linear",
    dotsClass: "slider-dots",
    customPaging: (i) => (
      <Button variant="secondary" label={"steppers"} shape={"dot"}></Button>
    ),
  };

  const carouselItems = [
    {
      title:
        "generate mesmerising illustrations & art  images from text.",
      video: ImageUrl.video4,
    },
    {
      title:
        "create High quality images of anything you can imagine in seconds.",
      video: ImageUrl.video5,
    },
    {
      title: "Fine-tuned Image Generating Model",
      video: ImageUrl.video6,
    },
  ];

  const buttonContent = { variant: "secondary", label: "Learn More" };
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
