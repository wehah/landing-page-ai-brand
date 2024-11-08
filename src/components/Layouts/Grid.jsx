import "./layouts.scss";
import ImageUrls from "../Common/image/ImageUrls";
import Card from "../Card/Card";
import Typography from "../Common/Typography/Typography";

export default function Grid() {

    const imgs = [
        ImageUrls.image4,
        ImageUrls.image5,
        ImageUrls.image6,
        ImageUrls.image7,
        ImageUrls.image8,
    ];
    const title = "A Glimpse into the AI-Generated World of our models. Create similar artistic images today.";
    return (
        <div className="grid-wrapper">
            <Typography variant={"h3"} color={"primary"}>{title}</Typography> 
        <div className="grid">
            {imgs.map((img, index) => (
                <div  key={index} className="grid-item">
                <Card
                    key={index}
                   item={{image:img}}
                />
                </div>
            ))}
        </div>
        </div>
    );
}   