import "./styles.css";
import Card from "./components/Card";
export default function App() {
  return (
    <div className="App">
      <Card
        date="23-11-2021"
        logo="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
        heading="Amazon Gift"
        subheading="Pay"
        devices="Desktop - Mobile"
        color="orange"
      />
      <Card
        date="23-11-2021"
        logo="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-logo-icons-31.png"
        heading="Apple Gift"
        subheading="Payment"
        devices="MacOS - Mobile"
        color="lightgrey"
      />
    </div>
  );
}
