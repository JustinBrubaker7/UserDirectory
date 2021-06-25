import React from 'react'

const Row = ({ users, dataLoaded }) => {
    console.log(users)
    return (
        <>

            {!dataLoaded ? <h1>laoding....</h1> : 
             users.map(user => (
                    <tr key={user.id} className='bg-gray-50'>
                      <td>{user.name.first}</td>
                    </tr>
                  ))
                }
        </>
    )
}

export default Row;