import React from 'react';

// import { Categories, SortPopup, PizzaBlock } from '../components';
import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = ({ searchValue, setSearchValue }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  // добавить пагинацию бекенд (#10, 01:00), нужен мокапи
  const [currentPage, setCurrentPage] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' });

  React.useEffect(() => {
    setIsLoading(true);
    //добавить сравнение по id (#9, 51:00), нужен мокапи
    fetch('https://dodo-pizzas.wiremockapi.cloud/pizzas')
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const filterPizzas = pizzas
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <SortPopup value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i} />) : filterPizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
