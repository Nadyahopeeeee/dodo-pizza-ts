import React from 'react';

import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ pizzas }) {
  console.log({ pizzas });
  // console.log(pizzas);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(title) => console.log(title)} />
        <SortPopup items={['популярности', 'цене', 'алфовиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
