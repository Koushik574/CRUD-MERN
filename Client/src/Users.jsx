/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";

import { useEffect, useState } from "react"

import axios from "axios"

const Users = () => {

    // eslint-disable-next-line no-unused-vars
    const [users, setUsers] = useState([])

    useEffect(() => {
        // axios.get("http://localhost:3000")
        axios.get("https://crud-mern-q5dj.onrender.com")
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        // axios.delete("http://localhost:3000/deleteUser/" + id)
        axios.delete("https://crud-mern-q5dj.onrender.com/deleteUser/" + id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success">Add +</Link>
            <table className="table">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((e) => {
                            
                            return(<tr key={e._id}>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.age}</td>
                                <td>
                                <Link to={`/update/${e._id}`} className="btn btn-success">Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(e._id)}>Delete</button>
                                </td>
                            </tr>)
                        })
                    }

                </tbody>

            </table>
        </div>

    </div>
  )
}

export default Users