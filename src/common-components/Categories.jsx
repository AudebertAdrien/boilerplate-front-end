function Categories({ handlClick, category }) {
  const listOfType = [
    "Photo Cameras",
    "Action Camera",
    "Video Cameras",
    "Microphone",
    "Lens",
  ];

  return (
    <div className="categories mt-4">
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
