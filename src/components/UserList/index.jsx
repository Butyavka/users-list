import React, {useMemo, useState, useEffect, useRef, useCallback} from "react";
import './style.css'
import List from "./List";
import Item from "./Item";
import {counter, getPartData, usersGenerator} from "./helpers";

const userAmount = 20

const UserList = () => {
  const allUsers = useMemo(() => usersGenerator(100), [])
  const [remainingUsers, setRemainingUsers] = useState(allUsers)
  const [users, setUsers] = useState([])
  const delay = useRef(0)

  useEffect(() => {
    const { part, remaining } = getPartData(allUsers, userAmount)

    setRemainingUsers(remaining)
    setUsers(part)
  }, [])

  const getMoreUsers = useCallback(() => {
    const { part, remaining } = getPartData(remainingUsers, userAmount)

    setRemainingUsers(remaining)
    setUsers(currentUsers => [...currentUsers, ...part])
  }, [])


  return (
    <div className="App">
      <List>
        {users.map((item, index) => {
          delay.current = counter(delay.current, userAmount)

          return (
            <Item
              key={index}
              surname={item.surname}
              name={item.name}
              delay={delay.current}
              callback={getMoreUsers}
              isLast={users.length - 1 === index}
            />
          )
        })}
      </List>
    </div>
  );
}

export default UserList;