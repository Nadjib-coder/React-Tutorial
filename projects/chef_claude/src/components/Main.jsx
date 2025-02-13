import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientListItem = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newValue = formData.get('ingredient');
    setIngredients((prev) => [...prev, newValue]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        ></input>
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientListItem}</ul>
    </main>
  );
}
