
import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './components/start/Start';
import Success from './components/success/Success';
//список пользователей https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);
  //стейт для инпута
  const [searchValue, setSearchValue] = useState('');

  //пример работы useEffect и useState
  useEffect(() => {
    //спецально задержка(чтобы увидеть прелоадер)
    setTimeout(() => {
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(json => setUsers(json.data))
        .catch((err) => {
          console.warn(err)
          alert('Ошибка при получении пользователей')
        }).finally(() => setLoading(false))
    }, 2000)
  }, [])
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      // setInvites(prev => prev.filter(_id => {
      //   console.log(prev)
      //   return _id !== id
      // }))
      setInvites(newInvites => invites.filter(function (_id) {
        if (_id !== id) {
          return true
        }
      }))
    } else {
      setInvites(prev => [...prev, id])
    }
  }
  const onClickSendInvites = () => {
    setSuccess(!success)
  }
  return (
    <div className='users'>
      {success
        ? <Success onClickSendInvites={onClickSendInvites} count={invites.length}></Success>
        : <Start
          invites={invites}
          isInvited
          onClickInvite={onClickInvite}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          isLoading={isLoading}
          items={users}
          onClickSendInvites={onClickSendInvites}
        ></Start>}
    </div>
  );
}

export default App;
