import { useState } from "react";
import "../style.css";
import supabase from "../supabase";
import CATEGORIES from "./categoriesArray";

function Fact({ fact, setFacts }) {
  let [isClickedInteresting, setIsClickedInteresting] = useState(false);
  let [isClickedMindblowing, setIsClickedMindblowing] = useState(false);
  let [isClickedFalse, setIsClickedFalse] = useState(false);

  let isDisputed =
    fact.votesInteresting + fact.votesMindblowing + 50 < fact.votesFalse;

  async function handleVote(columnName) {
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();

    if (columnName === "votesInteresting") {
      setIsClickedInteresting(true);
    } else if (columnName === "votesMindblowing") {
      setIsClickedMindblowing(true);
    } else if (columnName === "votesFalse") {
      setIsClickedFalse(true);
    }

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  }

  async function removeVote(columnName) {
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] - 1 })
      .eq("id", fact.id)
      .select();
    setIsClickedInteresting(false);

    if (columnName === "votesInteresting") {
      setIsClickedInteresting(false);
    } else if (columnName === "votesMindblowing") {
      setIsClickedMindblowing(false);
    } else if (columnName === "votesFalse") {
      setIsClickedFalse(false);
    }

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  }

  return (
    <li key={fact.id} className="fact">
      <p>
        {isDisputed ? <span className="disputed">⛔️[DISPUTED]</span> : null}
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>

      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>

      <div className="vote-buttons">
        <button
          onClick={() => {
            isClickedInteresting
              ? removeVote("votesInteresting")
              : handleVote("votesInteresting");
          }}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          onClick={() => {
            isClickedMindblowing
              ? removeVote("votesMindblowing")
              : handleVote("votesMindblowing");
          }}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button
          onClick={() => {
            isClickedFalse
              ? removeVote("votesFalse")
              : handleVote("votesFalse");
          }}
        >
          ⛔ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
}

export default Fact;
