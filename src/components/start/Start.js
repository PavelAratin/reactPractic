import React from "react";
import Form from "../form/Form";
import Users from "../users/Users";

const Start = ({ isLoading, items, onChangeSearchValue, searchValue, onClickInvite, isInvited, invites, onClickSendInvites }) => {
  const onClickHandler = () => {
    onClickSendInvites()
  }
  return (
    <React.Fragment>
      <Form onChangeSearchValue={onChangeSearchValue} searchValue={searchValue}></Form>
      <Users
        invites={invites}
        onClickInvite={onClickInvite}
        isLoading={isLoading}
        items={items}
        searchValue={searchValue}
      ></Users>
      {
        invites.length > 0 && <button onClick={onClickHandler} className='users__button'>Отправить приглашение</button>
      }
    </React.Fragment>
  )
}
export default Start;