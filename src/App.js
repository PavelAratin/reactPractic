import React, { useState, useEffect } from 'react';
import './App.css';
import Fotos from './components/fotos/Fotos';
import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';
//https://635146323e9fa1244e5a40f8.mockapi.io/FotosReact
//https://635146323e9fa1244e5a40f8.mockapi.io/FotosReact?category=3

//массив категорий для фильтрации
const cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" },
]

function App() {
  //стейт для работы  фильтрацией по категориям
  const [categoryId, setСategoryId] = useState(0)
  const [page, setPage] = useState(1)
  const [isLoadind, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('');
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    //при выборе категории происходит ре-рендеринг , идет запрос на сервер,пока ждем ответа показываем прелоадер
    setIsLoading(true)
    const category = categoryId ? `category=${categoryId}` : '';
    // const page = page ? `page=${categoryId}` : '';
    fetch(`https://635146323e9fa1244e5a40f8.mockapi.io/FotosReact?page=${page}&limit=3&${category}`)
      .then((res) => res.json())
      .then((data) => setCollection(data))
      .catch((err) => {
        console.warn(err)
        alert('Ошибка при получении данных')
      }).finally(() => {
        setIsLoading(false)
      })
  }, [categoryId, page]);
  return (
    <React.Fragment>
      <Header
        onClickHandler={setСategoryId}
        categoryId={categoryId}
        cats={cats}
        value={searchValue}
        onChangeHandler={setSearchValue}
      ></Header>
      <Fotos
        collection={collection}
        searchValue={searchValue}
        isLoadind={isLoadind}
      ></Fotos>
      <div className='container'>
        <Pagination onClickHandler={setPage} page={page}></Pagination>
      </div>
    </React.Fragment>
  );
}

export default App;
