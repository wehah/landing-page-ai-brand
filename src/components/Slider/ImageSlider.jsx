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
    autoplaySpeed: 1500000,
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
      video: ImageUrl.video1,
    },
    {
      title:
        "create High quality images of anything you can imagine in seconds.",
      video: ImageUrl.video2,
    },
    {
      title: "Fine-tuned Image Generating Model",
      video: ImageUrl.video3,
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
