function Categories({ handlClick, category }) {
  const listOfType = ["vegetable", "drink", "fruit", "grocery"];

  return (
    <div className="mt-4">
      <ul>
        {listOfType.map((link) => {
          return (
            <li
              key={link}
              className={`categories ${category == link ? "active" : ""}`}
              onClick={() => handlClick(link)}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
