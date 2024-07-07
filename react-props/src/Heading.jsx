export default function Heading({ color = "olive", text }) {
  return (
    <div>
      <h2 style={{ color: color }}>Hello {text}!!!!</h2>
    </div>
  );
}
