import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

type exListType = {
  exercises: []
}

type exerciseRowProps = {
  exercise: any,
  deleteExercise : (id: any ) => void,
  key: any
}

const ExerciseRow = (props:exerciseRowProps) => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.desc}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"edit/" + props.exercise._id}>Edit</Link> | <a href='#' onClick={() => props.deleteExercise(props.exercise._id)}>Delete</a>
      </td>
    </tr>
  )
}

const ExercisesList  = () => {

  const [exListState, setExListState] = useState<exListType>({exercises: []})

  useEffect(() => {
    axios.get("http://localhost:5500/exercises")
      .then(response => {
        setExListState({
          exercises: response.data
        })
      })
      .catch((err:Error) => {console.log(err)})
  })

  const deleteExercise = (id:any) => {
    axios.delete("http://localhost:5500/exercises/" + id)
      .then(res => console.log(res.data))
    
    axios.get("http://localhost:5500/exercises")
    .then(response => {
      setExListState({
        exercises: response.data
      })
    })
      .catch((err:Error) => {console.log(err)})
    // setExListState({
    //   exercises: exListState.exercises.filter((el:any) => el._id !== id)
    // })
  }

  const exRowMaker = () => {
    return (
      exListState.exercises.map(((e:any) =>{
        return (
          <ExerciseRow exercise={e} deleteExercise={deleteExercise} key={e._id}/>
        )
      })
    )
    )
  }
  
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Username</th>
            <th>Desc</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exRowMaker()}
        </tbody>
      </table>
    </div>
  )
}

export default ExercisesList