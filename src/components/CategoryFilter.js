import React from "react";

function CategoryFilter({ selectedButton, setSelectedButton, categories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => (
        <button
          className={selectedButton === category ? 'selected' : ''}
          key={index}
          onClick={() => setSelectedButton(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;


