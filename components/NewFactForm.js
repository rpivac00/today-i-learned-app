import { useState } from "react";
import supabase from "../supabase";
import "../style.css";
import CATEGORIES from "./categoriesArray";

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm, isUploading, setIsUploading }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    //1.Prevent broswer reload
    e.preventDefault();

    //2.Check if data is valid, If so, create a new fact
    if (text && isValidHttpUrl(source) && category && text.length <= 200) {
      //Upload fact to Supabase and recieve the new fact object
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert({ text, source, category })
        .select();
      setIsUploading(false);

      //3. Add the new fact to the UI: add the fact to state

      if (!error) setFacts((facts) => [newFact[0], ...facts]);
      else alert("There is some error uploading the fact");

      //Reset input fields
      setText("");
      setSource("");
      setCategory("");

      //close the form
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength="200"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - text.length}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

export default NewFactForm;
