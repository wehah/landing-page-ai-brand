import "./image.scss";

export default function Video({ ...props }) {
  return <video {...props} className="image" preload="metadata" autoPlay muted loop playsInline />;
}
