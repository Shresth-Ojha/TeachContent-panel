import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

type exerciseType= {
  username: string,
  desc: string,
  duration: number,
  date: Date,
  users?: string[]
}


const EditExercise  = () => {

  const [editexerciseState, seteditExerciseState] = useState<exerciseType>({
    username : "",
    desc: "",
    duration : 0,
    date: new Date(),
    users: []
  })

  useEffect(() => {
    // const fetchdata = async () => {
    //   try{
    //     const response2 = await axios.get("http://localhost:5500/users");
    //     if(response2.data.length > 0){
    //       seteditExerciseState({
    //         username: editexerciseState.username,
    //         desc: editexerciseState.desc,
    //         duration: editexerciseState.duration,
    //         date: editexerciseState.date,
    //         users: response2.data.map((user:any) => user.username)
    //       })
    //     }
    //     console.log("data2 fetched")
        
    //     const response = await axios.get("http://localhost:5500/exercises/" + window.location.href.substring(27));
    //     seteditExerciseState({
    //       username: response.data.username,
    //       desc: response.data.desc,
    //       duration: response.data.duration,
    //       date: new Date(response.data.date),
    //     })
    //     console.log("data1 fetched")
    //   }
    //   catch(error){
    //     console.log("Error blabla: ", error)
    //   }
    // }
    // fetchdata()

    const loldata1 = async () => {
      let lol1;
      try{
        lol1 = await axios.get("http://localhost:5500/users")
      }
      catch(error){
        console.log(error)
      }
      return lol1;
    }
    loldata1()
      .then((response2:any)=> {
        if(response2.data.length > 0){
          seteditExerciseState({
            username: editexerciseState.username,
            desc: editexerciseState.desc,
            duration: editexerciseState.duration,
            date: editexerciseState.date,
            users: response2.data.map((user:any) => user.username)
          })
          console.log("job1 done")
        }
        axios.get("http://localhost:5500/exercises/" + window.location.href.substring(27))
          .then(res => {
            seteditExerciseState({
              username: res.data.username,
              desc: res.data.desc,
              duration: res.data.duration,
              date: new Date(res.data.date),
            })
            console.log("job2 done")
          })
      })


    // const fetchdata = async () => {
    //   try{
    //     const response2 = await axios.get("http://localhost:5500/users");
    //     if(response2.data.length > 0){
    //       seteditExerciseState({
    //         username: editexerciseState.username,
    //         desc: editexerciseState.desc,
    //         duration: editexerciseState.duration,
    //         date: editexerciseState.date,
    //         users: response2.data.map((user:any) => user.username)
    //       })
    //       console.log("data1", editexerciseState.users)
    //     }
    //   }catch(error) {console.log(error)}
    // }

    // fetchdata()
    //   .then(() => {
    //         axios.get("http://localhost:5500/exercises/" + window.location.href.substring(27))
    //           .then(response => {
    //             seteditExerciseState({
    //             username: response.data.username,
    //             desc: response.data.desc,
    //             duration: response.data.duration,
    //             date: new Date(response.data.date),
    //             users: editexerciseState.users
    //           })
    //           console.log("data 2")
    //           }
    //         )
    //   })

    
    
    // const fetchdata2 = async () => {
    //   try{
    //     const response = await axios.get("http://localhost:5500/users");
    //     if(response.data.length > 0){
    //       seteditExerciseState({
    //         username: editexerciseState.username,
    //         desc: editexerciseState.desc,
    //         duration: editexerciseState.duration,
    //         date: editexerciseState.date,
    //         users: response.data.map((user:any) => user.username)
    //       })
    //     }
    //     console.log("data2 fetched")
    //   }
    //   catch(error){
    //     console.log("Error blabla: ", error)
    //   }
    // }

    // fetchdata1();
    // await fetchdata2();

    // const fetchData1 = async () => {
    //   var response:any;
    //   try{
    //     response = await axios.get("http://localhost:5500/exercises/" + window.location.href.substring(27));
    //   } catch (err) {console.log(err)}

    //   seteditExerciseState({
    //     username: response.data.username,
    //     desc: response.data.desc,
    //     duration: response.data.duration,
    //     date: new Date(response.data.date),
    //     users: editexerciseState.users
    //   })
    // }

    // const fetchData2 = async () => {
    //   var response:any;
    //   try{
    //     response = await axios.get("http://localhost:5500/users");
    //   } catch (err) {console.log(err)}

    //   if (response.data.length > 0) {
    //     seteditExerciseState({
    //       username: editexerciseState.username,
    //       desc: editexerciseState.desc,
    //       duration: editexerciseState.duration,
    //       date: editexerciseState.date,
    //       users: response.data.map((user:any) => user.username)
    //     })
    //   }
    // }

    // fetchData1()
    // fetchData2()
    
    // axios.get("http://localhost:5500/users")
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       seteditExerciseState({
    //         username: editexerciseState.username,
    //         desc: editexerciseState.desc,
    //         duration: editexerciseState.duration,
    //         date: editexerciseState.date,
    //         users: response.data.map((user:any) => user.username)
    //       })
    //     }
    //   })
    //   .catch((err:Error) => {console.log(err)})

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onChangeUsername = (e:React.ChangeEvent<HTMLSelectElement>) => {
    seteditExerciseState({
      username : e.target.value,
      desc: editexerciseState.desc,
      duration: editexerciseState.duration,
      date: editexerciseState.date,
      users: editexerciseState.users
    })
  }
  const onChangeDesc = (e:React.ChangeEvent<HTMLInputElement>) => {
    seteditExerciseState({
      username :editexerciseState.username,
      desc : e.target.value,
      duration: editexerciseState.duration,
      date: editexerciseState.date,
      users: editexerciseState.users
    })
  }
  const onChangeDuration = (e:React.ChangeEvent<HTMLInputElement>) => {
    seteditExerciseState({
      username : editexerciseState.username,
      desc: editexerciseState.desc,
      duration : Number(e.target.value),
      date: editexerciseState.date,
      users: editexerciseState.users
    })
  }
  const onChangeDate = (date:any) => {
    seteditExerciseState({
      username : editexerciseState.username,
      desc: editexerciseState.desc,
      duration : editexerciseState.duration,
      date: date,
      users: editexerciseState.users
    })
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const exercise = {
      username : editexerciseState.username,
      desc: editexerciseState.desc,
      duration : editexerciseState.duration,
      date: editexerciseState.date,
      users: editexerciseState.users
    }

    console.log(exercise);

    axios.post("http://localhost:5500/exercises/update/" + window.location.href.substring(27), exercise)
      .then(res => console.log(res.data))

    seteditExerciseState({
      username : "",
      desc: "",
      duration : 0,
      date: new Date(),
      users: editexerciseState.users
    })

    window.location.assign('/');
  }


  return (
    <div> 
    <h3>Edit New Exercise</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label> Username: </label>
        <input placeholder={editexerciseState.username}/>
        <select
              required
              className='form-control'
              value={editexerciseState.username}
              onChange={onChangeUsername}>
                {/* {
                  editexerciseState.users?.map((user) => {
                    return(
                      <option key={user} value={user}>
                        {user}
                      </option>
                    )
                  })
                } */}
                <option>
                  {editexerciseState.username}
                </option>
                {/* <option>
                  {editexerciseState.users[1]}
                </option>
                <option>
                  {editexerciseState.users[2]}
                </option> */}
        </select>
        {/* <ul>
          {
            editexerciseState.users.map((element) => {return(<li>{element}</li>)})
          }
        </ul> */}
      </div>
      <div className="form-group">
        <label>Description: </label>
        <input type='text'
              required
              className='form-control'
              value={editexerciseState.desc}
              onChange={onChangeDesc}/>
      </div>
      <div className="form-group">
        <label>Duration (in minutes): </label>
        <input type='text'
              required
              className='form-control'
              value={editexerciseState.duration}
              onChange={onChangeDuration}/>
      </div>
      <div className="form-group">
        <label>Date: </label>
        <div>
          <DatePicker
              selected={editexerciseState.date}
              onChange={onChangeDate}
          />
        </div>
      </div>

      <div className="form-group">
        <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
      </div>
    </form>
    </div>
  )
}

export default EditExercise