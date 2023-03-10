import React from 'react';

import { Categories, SortPopup, PizzaBlock } from '../components';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home({ pizzas, isLoading }) {
  // const [isLoading, setIsLoading] = React.useState(false);
  // console.log({ pizzas });
  // console.log(pizzas);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(title) => console.log(title)} />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
