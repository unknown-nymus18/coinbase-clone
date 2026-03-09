import "../../styles/cryptobasics.css";

interface Props {
  title?: string;
  subtitle?: string;
  imgUrl?: string;
  maxLength?: number;
}

function CryptoInfo({ title, subtitle, imgUrl, maxLength = 120 }: Props) {
  const truncatedSubtitle =
    subtitle && subtitle.length > maxLength
      ? subtitle.substring(0, maxLength) + "..."
      : subtitle;

  return (
    <div className="cryptoinfo">
      <img src={imgUrl} alt={title || "Crypto info"} />
      <h1>{title}</h1>
      <p>{truncatedSubtitle}</p>
    </div>
  );
}

export default CryptoInfo;
