import { useState } from "react";
// App
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  return (
    <>
      <h1>Gif Expert App o k ase</h1>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;

// API key ajnuRcQxROl3QWN4u12musdIP1JONXmT
