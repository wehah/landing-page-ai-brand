import "./layouts.scss";
import Card from "../Card/Card";


export default function Banner() {

    const bannerItems = [
        {
            title: "millions",
            description: "of images generated every year.",
            thumbnail: {
                text:"image",
                content:{color: "primary-light", variant: "icon"},
            }
        },
        {
            title: "millions",
            description: "Of artistic illustrations  created every year.",
            thumbnail: {
                text:"draw",
                content:{color: "primary-light", variant: "icon"},
            }
        },
        {
            title: "tens of thousands",
            description: "of hours saved every year.",
            thumbnail: {
                text:"mood",
                content:{color: "primary-light", variant: "icon"},
            }
        },
        {
            title: "millions",
            description: "of happy users every year.",
            thumbnail: {
                text:"diversity_3",
                content:{color: "primary-light", variant: "icon"},
            }
        }
    ]

    const buttonContent = { variant: "textLink", label: "arrow_forward", shape: "rounded" };
  const heading = { color: "primary", variant: "h2" };
  const body = { color: "primary", variant: "body1" };
   
    return (
        
        <div className="banner-wrapper"> 
        <div className="banner-framer"
        >

        {bannerItems.slice(0, 3).map((item, index) => (
        <Card
          key={index}
          thumbnail={item.thumbnail}
          item={item}
          content={{
            buttonContents: buttonContent,
            heading: heading,
            body: body,
          }}
        />
      ))}

        </div >
 
        
            </div>
    );
}