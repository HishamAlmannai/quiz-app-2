export default function Paragraph({ pText, hidden }) {
  if (hidden) {
    return <p hidden>0</p>;
  } else {
    return <p>{pText}</p>;
  }
}
