import React, { useEffect, useState } from 'react';
import { GetUsers } from '../../services/fetchs';

function ListaUsers() {
  const [listaUsers, setListaUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();
      setListaUsers(data.users || []);
    };

    fetchUsers();
  }, []);

  console.log(listaUsers);

  return (
    <div>
      <h1 className='text-danger'>Lista de Usuarios</h1>
     
        {listaUsers && listaUsers.map((user) => (
          <div key={user.id} className='text-info'>{user.id} - {user.name}</div>
        ))}
  
    </div>
  );
}

export default ListaUsers;
