import React, { useState } from 'react'
import axios from 'axios'

type userType ={
  username: string
}

const CreateUser  = () => {

  const[userState, setUserState] = useState<userType>({username: ''})

  const  onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      username: e.target.value
    })

  }
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(userState)

    axios.post("http://localhost:5500/users/add", userState)
      .then(res => console.log(res.data))
      .catch((err:Error) => {console.log(err)})

    setUserState({
      username: ''
    })

  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type='text'
              required
              className='form-control'
              value={userState.username}
              onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUser