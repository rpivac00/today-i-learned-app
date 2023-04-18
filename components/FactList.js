import "../style.css";
import Fact from "./Fact";

function FactList({ facts, setFacts }) {
  if (facts.length === 0) {
    return <p>No facts for this category yet! Create the first one 👆</p>;
  }

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
      <p>
        There {facts.length === 1 ? "is" : "are"} {facts.length}{" "}
        {facts.length === 1 ? "fact" : "facts"} in the database. Add your own!
      </p>
    </section>
  );
}

export default FactList;
