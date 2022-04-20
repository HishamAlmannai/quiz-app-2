import { QuestionsData } from "./QuestionsData";
import QuestionCard from "./QuestionCard";
import { Ul } from "./Ul.styled";

export default function Questions() {
  return (
    <Ul>
      {QuestionsData.map((curry) => (
        <QuestionCard key={curry.id} question={curry} />
      ))}
    </Ul>
  );
}
