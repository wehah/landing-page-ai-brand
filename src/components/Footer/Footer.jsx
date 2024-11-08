import "./footer.scss";
import ListItem from "../Common/ListItems/ListItem";
import Typography from "../Common/Typography/Typography";
import Image from "../Common/image/Image";
import github from "../../assets/icons/github.svg";
import discord from "../../assets/icons/discord.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";



export default function Footer() {

    const footerItems = ["company", "models", "policies", "research"];
    const socials = [github, discord, youtube, instagram, facebook];

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-list-items"> 
                    {footerItems.map((item) => (
                        <ListItem key={item} width="full" label={item} color="primary" />
                    ))}
                  
                      </div>
                <div className="footer-socials">
                {socials.map((item) => (
                    <Image key={item} src={item} alt={`${item}`} />
                ))}
              
                </div>
            </div>
            <div className="footer-text">
                <Typography variant={"body2"}>© 2024 by wehah.ai. All rights reserved.</Typography>
            </div>
        </div>
    );
}