import React, { useState, useEffect } from 'react';
import Row from './Row'

  export default function Table() {

    const [users, setUsers] = useState('')
    const [dataLoaded, setDataLoaded] = useState(false)
    // const [userId, setUserId] = useState()
  
    useEffect(() => {
        getUserData();
    },[])

    const getUserData = async () => {

        const apiCall = await fetch('https://randomuser.me/api/?results=10')
        const userData = await apiCall.json()
        const userArray = userData.results
        setUsers(userArray)
        setDataLoaded(true)
  
    }

    const sortUsers = () => {
      const userArry = users
      userArry.sort(function (a, b) {
        return a.name.first.localeCompare(b.name.first);
    })
        setUsers(userArry)  
        console.log(userArry)
  }
     

    return (
      <div className="flex flex-col">
        <button onClick={() => sortUsers()}>Sort  </button>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      First   Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                {!dataLoaded ? <h1>loading....</h1> : 
                     users.map(user => (
                    <tr key={user.id} className='bg-gray-50'>
                      <td>{user.name.first}</td>
                      <td>{user.name.last}</td>
                      <td>{user.email}</td>
                      <td>{user.name.first}</td>
                      <td>{user.name.first}</td>
                    </tr>
                  ))
                }
                  {/* <Row users={users} dataLoaded={dataLoaded} />   */}
                 </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    )
  }
  