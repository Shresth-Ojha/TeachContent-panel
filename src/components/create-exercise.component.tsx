import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

type exerciseType= {
  username: string,
  desc: string,
  duration: number,
  date: Date,
  users: string[]
}


const CreateExercise  = () => {

  //On change Functions
  const [exerciseState, setExerciseState] = useState<exerciseType>({
    username : "",
    desc: "",
    duration : 0,
    date: new Date(),
    users: []
  })

  useEffect(() => {
    axios.get("http://localhost:5500/users")
      .then(response => {
        if (response.data.length > 0) {
          setExerciseState({
            username: response.data[0].username,
            desc: exerciseState.desc,
            duration: exerciseState.duration,
            date: exerciseState.date,
            users: response.data.map((user:any) => user.username)
          })
        }
      })
      .catch((err:Error) => {console.log(err)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) // passing an empty array: useEffect renders only once( the first time )
  

  const onChangeUsername = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setExerciseState({
      username : e.target.value,
      desc: exerciseState.desc,
      duration: exerciseState.duration,
      date: exerciseState.date,
      users: exerciseState.users
    })
  }
  const onChangeDesc = (e:React.ChangeEvent<HTMLInputElement>) => {
    setExerciseState({
      username :exerciseState.username,
      desc : e.target.value,
      duration: exerciseState.duration,
      date: exerciseState.date,
      users: exerciseState.users
    })
  }
  const onChangeDuration = (e:React.ChangeEvent<HTMLInputElement>) => {
    setExerciseState({
      username : exerciseState.username,
      desc: exerciseState.desc,
      duration : Number(e.target.value),
      date: exerciseState.date,
      users: exerciseState.users
    })
  }
  const onChangeDate = (date:any) => {
    setExerciseState({
      username : exerciseState.username,
      desc: exerciseState.desc,
      duration : exerciseState.duration,
      date: date,
      users: exerciseState.users
    })
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const exercise = {
      username : exerciseState.username,
      desc: exerciseState.desc,
      duration : exerciseState.duration,
      date: exerciseState.date,
      users: exerciseState.users
    }

    console.log(exercise);

    axios.post("http://localhost:5500/exercises/add", exercise)
      .then(res => console.log(res.data))

    setExerciseState({
      username : "",
      desc: "",
      duration : 0,
      date: new Date(),
      users: exerciseState.users
    })

    // window.location = '/';
    window.location.assign('/');
  }


  return (
    <div> 
    <h3>Create New Exercise</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label> Username: </label>
        <select
              required
              className='form-control'
              value={exerciseState.username}
              onChange={onChangeUsername}>
                {
                  exerciseState.users.map((user) => {
                    return(
                      <option key={user} value={user}>
                        {user}
                      </option>
                    )
                  })
                }
        </select>
      </div>
      <div className="form-group">
        <label>Description: </label>
        <input type='text'
              required
              className='form-control'
              value={exerciseState.desc}
              onChange={onChangeDesc}/>
      </div>
      <div className="form-group">
        <label>Duration (in minutes): </label>
        <input type='text'
              required
              className='form-control'
              value={exerciseState.duration}
              onChange={onChangeDuration}/>
      </div>
      <div className="form-group">
        <label>Date: </label>
        <div>
          <DatePicker
              selected={exerciseState.date}
              onChange={onChangeDate}
          />
        </div>
      </div>

      <div className="form-group">
        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
      </div>
    </form>
    </div>
  )
}

export default CreateExercise