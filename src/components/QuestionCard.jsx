import { useState } from "react";
import { Article } from "./QuestionCard.styled";

export default function QuestionCard({ question }) {
  const [answer, setAnswer] = useState(false);

  return (
    <Article>
      <section>{question.question}</section>
      <button
        onClick={() => {
          setAnswer(!answer);
        }}
      >
        {answer ? "hide answer" : "show answer"}
      </button>
      <section>{answer ? question.answer : ""}</section>
    </Article>
  );
}
