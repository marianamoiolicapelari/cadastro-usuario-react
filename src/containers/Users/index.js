import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItems';
import Button from '../../components/Button'
import {
  Container,
  Image,
  User
} from './styles'

const Users = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()


  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()
  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage() {
    history.push('/')
  }

  return (
    <Container>
      <Image alt='logo-imagem' src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt='lata-de-lixo' src={Trash} />
              </button>
            </User>

          ))
          }
        </ul>

        <Button onClick={goBackPage} buttonUsers={true}>
          <img alt='seta' src={Arrow} />Voltar
        </Button>

      </ContainerItens>
    </Container>
  )
}

export default Users