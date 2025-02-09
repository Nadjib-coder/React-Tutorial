export default function Main() {
  const handelClick = () => {
    alert('You clicked me!');
  };
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
        ></input>
        <button onClick={handelClick}>Add ingredient</button>
      </form>
    </main>
  );
}
