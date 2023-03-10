import React from 'react';

function Categories({ items, onClickItem }) {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  // const onSelectCategory = (i) => {
  //   setActiveCategory(i);
  // };

  return (
    <div className="categories">
      <ul>
        {categories &&
          categories.map((categoryName, i) => (
            <li
              key={categoryName}
              className={activeCategory === i ? 'active' : ''}
              onClick={() => setActiveCategory(i)}
            >
              {categoryName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
