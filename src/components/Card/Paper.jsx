import "./card.scss"
import Card from "./Card";

export default function Paper() {

    const items = [
        {
          buttonContent: { variant: "primary", label: "explore" },
          TypographyContent: {
            heading: { color: "primary", variant: "h3" },
            body: { color: "primary", variant: "body1" },
            title: "our Latest AI Models",
            description:
              "Discover the next generation of AI technology. Our team of AI experts has developed cutting-edge models that push the bounderies of what is possible.",
          },
        },
      ];


    return (
        <div className="paper">
        {items.map((item, index) => (
          <Card
          key={index}
            item={item.TypographyContent}
            cardLabel={"info"}
            content={{ 
              buttonContents:item.buttonContent,
              heading:item.TypographyContent.heading,
              body:item.TypographyContent.body,
            }}
          />
        ))}
      </div>
    )
}