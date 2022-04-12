import "./index.css";
import Paragraph from "./components/paragraph.jsx";
import Button from "./components/button.jsx";
import SmallStep from "./components/smallStep.jsx";
import ApiData from "./components/ApiData.jsx";

export default function App() {
  
  return (
    <article className="card">
      <h2>Question</h2>
      <section>
        <Paragraph pText="What works?" hidden={false} />
      </section>
      <Button />
      <section>
        <Paragraph pText="This works" hidden={true} />
      </section>

      <section><SmallStep /></section>
      <ApiData />
      
    </article>
  );
  
}