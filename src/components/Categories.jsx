import React from 'react';

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (i) => {
    setActiveItem(i);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, i) => (
            <li
              className={activeItem === i ? 'active' : ''}
              onClick={() => onSelectItem(i)}
              key={`${name}_${i}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
