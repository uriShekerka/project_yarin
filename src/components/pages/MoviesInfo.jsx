
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const MoviesInfo = () => {

    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const nav = useNavigate();

    const doApiInfo = async () => {
        setLoading(true)
        let url = `http://www.omdbapi.com/?i=${params.id}&apikey=b5b741c5`
        const { data } = await axios.get(url)
        console.log(data);
        setInfo(data);
        setLoading(false);
    }
    useEffect(() => {
        doApiInfo()
    }, [])

    return (
        <div>
            {loading ? <h1 className='foundCss text-danger font-black text-center mt-2'>Loading...</h1> :
                <div className='container-fluid'>
                    <div className="container   mt-5">

                        <div className="row mx-auto mt-2 justify-center">

                            <div className='col-md-4  pt-4 mb-3 shadow '>
                                <img src={info.Poster} alt="" className='width="350" ' />
                            </div>
                            <div className=' col-md-7 pt-4 mb-5  text-md-start text-center text-white'>
                                <h2 className='font-bold mt-2'>{info.Title}</h2>
                                <p className='mt-2'>{info.Plot}</p>
                                <h6 className='mt-2'>Gener : {info.Genre}</h6>
                                <p className='mt-2'>Actors : {info.Actors}</p >
                                <div className='d-flex mt-3'>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/half_star.png" alt="" />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                <button onClick={() =>{
                                    nav(-1)
                                }} className='btn  btn-light  '  >Back</button>
                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            }
         
        </div>
    )
}



    export default MoviesInfo