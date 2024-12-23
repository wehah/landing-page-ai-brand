import "./layouts.scss";
import ImageUrls from "../Common/image/ImageUrls";
import { ImageUrl } from "../Common/image/ImageUrl";
import Card from "../Card/Card";

export default function CardDeck() {
  const items = [
    {
      image: ImageUrl.image8,
      title: "Developer assistant model",
      description:
        "Our developer assistant model is designed to streamline is designed to streamline your workflow. With it’s advanced capabilities you can automate repetitive tasks and optimise code.",
    },
    {
      image: ImageUrl.image9,
      title: "Visualise your ideas",
      description:
        "Wehah Vision is creative partner for content creators. Generate stunning visual assets, and illustrations from text effortlessly. Experience the power of AI driven efficiency today.",
    },
    {
      image: ImageUrl.image10,
      title: "Let your creativity flow",
      description:
        "Wehah Vision is creative partner for content creators. Generate stunning visual assets, and illustrations from text effortlessly. Experience the power of AI driven efficiency today.",
    },
  ];




  // items.map((item, index) => {console.log(item.image)})

  const buttonContent = { variant: "textLink", label: "arrow_forward", shape: "rounded" };
  const heading = { color: "primary", variant: "h3" };
  const body = { color: "primary", variant: "body1" };

  return (
    <div className="card-deck">
      {items.map((item, index) => (
          <Card
          cardLabel={"media"}
          key={index}
          item={item}
          content={{ 
            buttonContents:buttonContent,
            heading:heading,
            body:body
          }}
          />
      ))}
    </div>
  );
}
