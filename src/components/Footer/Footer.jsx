import "./footer.scss";
import Typography from "../Common/Typography/Typography";
import Image from "../Common/image/Image";
import github from "../../assets/icons/github.svg";
import discord from "../../assets/icons/discord.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";

let blurhash = "LKO2?U%2Tw=w]~RBVZRi};RPxuwH";

export default function Footer() {
  const footerItems = [
    {
      title: "Company",
      items: ["About us", "Our Story", "Contact Us"],
    },
    {
      title: "Terms & Policies",
      items: ["User Agreements", "Guidelines"],
    },
    {
      title: "Latest Models",
      items: ["Wehah Vision", "Dev Solutions"],
    },
    {
      title: "Research",
      items: ["Our Advancements", "Publications", "Innovations Hub"],
    },
    {
      title: "Privacy",
      items: ["Data Protection", "Privacy Statement", "Cookie Policy"],
    },
  ];

  const socials = [github, discord, youtube, instagram, facebook];

  return (
    <div className="footer">
      <div className="footer-items">
        {footerItems.map((item, index) => (
          <div key={index} className="footer-item">
            <Typography variant={"body2"} color="primary">
              {item.title}
            </Typography>
            {item.items.map((subItem, subIndex) => (
              <Typography key={subIndex} variant={"body2"} color="primary-dim">
                {subItem}
              </Typography>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-text">
        <Typography variant={"body2"} color={"primary-dim"}>
          &copy; Design and code by Mohamed Ali.
        </Typography>
      </div>

      <div className="footer-socials">
        {socials.map((item) => (
          <Image key={item} src={item} blurhash={blurhash} alt={`${item}`} />
        ))}
      </div>
    </div>
  );
}
