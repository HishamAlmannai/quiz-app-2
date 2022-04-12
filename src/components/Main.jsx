import { Questions } from "./Questions";
import CardQuestion from "./CardQuestion";

export default function Main() {
  return (
    <>
      <main>
        <ul>
          {Questions.map((question) => (
            <CardQuestion key={question.id} question={question.question} />
          ))}
        </ul>
      </main>
    </>
  );
}
