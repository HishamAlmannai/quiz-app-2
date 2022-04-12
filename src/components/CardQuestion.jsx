export default function CardQuestion({ question }) {
  return (
    <>
      <section>{question}</section>
      <button>Show Answer</button>
      <section>Answer</section>
    </>
  );
}
