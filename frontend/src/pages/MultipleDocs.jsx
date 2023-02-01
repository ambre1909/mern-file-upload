import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';



export default function MultipleDocs() {
    const [docsData, setDocsData] = useState([])
    const [DOB, setDOB] = useState()
    const [Adhar, setAdhar] = useState()
    const [Tc, setTc] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("dob", DOB)
        fd.append("adhar", Adhar)
        fd.append("tc", Tc)
        const { data } = await axios.post(`http://localhost:5000/doc/add`, fd)
        // console.log(DOB)
        console.log(data);
    }


    const getAllDocs = async () => {
        const { data } = await axios.get(`http://localhost:5000/doc`)
        setDocsData(data.result)
        console.log(data.result);
    }
    useEffect(() => {
        getAllDocs()
    }, [])



    return (<>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 offset-3">
                    <div class="card">
                        <div class="card-header">header</div>
                        <div class="card-body">
                            <form onSubmit={handleSubmit} >
                                <div>
                                    <input type="file" onChange={e => setDOB(e.target.files[0])} class="form-control" id="name" placeholder="upload db certificate" />
                                </div>
                                <br />
                                <div>
                                    <input type="file" onChange={e => setAdhar(e.target.files[0])} class="form-control" id="name" placeholder="upload adhar certificate" />
                                </div>
                                <br />
                                <div>
                                    <input type="file" onChange={e => setTc(e.target.files[0])} class="form-control" id="name" placeholder="upload tc certificate" />
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">Upload</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>


        {
            docsData.map(item =>
                <div class="card">
                    <div class="card-header">header</div>
                    <div class="card-body">
                        <img src={`http://localhost:5000/${item.userAdhar}`} height={100} width={100} alt="" srcset="" />
                        <img src={`http://localhost:5000/${item.userAdhar}`} height={100} width={100} alt="" srcset="" />
                        <img src={`http://localhost:5000/${item.userAdhar}`} height={100} width={100} alt="" srcset="" />
                    </div>

                </div>
            )
        }

    </>

    )
}
