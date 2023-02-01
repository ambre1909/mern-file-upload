import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function MultiImage() {
    const [name, setName] = useState("kate")
    const [documents, setDocuments] = useState()
    const [users, setUsers] = useState([])
    const userInstance = axios.create({ baseURL: "http://localhost:5000" })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("name", name)
        for (let d of documents) {
            fd.append("doc", d)
            const { data } = await userInstance.post("/user/add-to-gallary", fd)
            console.log(data);


            // to see data of fd
            // for (const x of fd.entries()) {
            //     console.log(x);
            // }

        }

    }
    const getAllUsers = async () => {
        const { data: { result } } = await userInstance.get("/user/fetch")
        setUsers(result);
        console.log(result);
    }
    useEffect(() => {
        getAllUsers()
    }, [])






    return (<>
        {/* <pre>{JSON.stringify(documents, null, 2)}</pre> */}
        <form onSubmit={handleSubmit} >
            <div className="container mt-5">
                <div className="col-6 offset-2">
                    <div className='card' >
                        <div className="card-header">Add Multiple Docs</div>
                        <div className="card-body">
                            <div>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" class="form-control my-2" placeholder="Enter Your Name" />
                                <br />
                                <input multiple type="file" onChange={e => setDocuments(e.target.files)} class="form-control" placeholder="please choose docs" />
                                <button type="submit" class="btn btn-primary my-3">Add Docs</button>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </form>



        <div className="mt-5">
            {users.map(item =>
                <div class="card">
                    <div class="card-header">header</div>
                    <div class="card-body">
                        <h3>{item.name}</h3>

                        {
                            item.docs.map(url =>
                                <img src={`http://localhost:5000/${url}`} height={100} width={100} alt="" srcset="" />
                            )
                        }

                    </div>

                </div>
            )}
        </div>







    </>

    )
}
