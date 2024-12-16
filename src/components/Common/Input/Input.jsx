import Typography from "../../Common/Typography/Typography";
import "./input.scss"

export default function Input({ ...props }) {
    return (
        <div className="input-container">
        <input { ...props }/>


     
        </div>
    );
}