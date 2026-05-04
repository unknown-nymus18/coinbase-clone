import "../../styles/clonebanner.css";

interface Props {
  text: String;
}

function CloneBanner({ text }: Props) {
  return (
    <div className="clone-banner">
      <p>{text}</p>
    </div>
  );
}

export default CloneBanner;
