import React from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories &&
          categories.map((categoryName, i) => (
            <li key={i} className={value === i ? 'active' : ''} onClick={() => onChangeCategory(i)}>
              {categoryName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
