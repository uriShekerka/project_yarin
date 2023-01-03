import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Page1 from './pages/page1'






const Main = () => {

  const [moveis, setMoveis] = useState([])
  const [loading, setLoading] = useState(true);
  
  const params = useParams();

  const doApi = async () => {
    try {
      setLoading(true)
      console.log(moveis);
      let url = `http://www.omdbapi.com/?s=${params.search ||"bank"}&apikey=b5b741c5`
      const {data} = await axios.get(url)
      console.log(data.Search)
      setMoveis(data.Search);
      console.log(params.search);
      setLoading(false)

    } catch (err) {
      console.log(err)
    }
  }

  //בשביל השאפליקציה תאתחל את עצמה ביחד עם הקשת האייפיאי נשתמש בהוק זה:
  useEffect(() => {
  
    doApi()
  }, [params])
  return (
    <div className='bg-secondary'>
      {moveis ? (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="container d-flex">
              <div className="d-flex flex-wrap justify-content-start">
                {moveis.map((item, i) => {
                  return <Page1 key={i} item={item} />;
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Movie Not Found</p>
      )}
    </div>

  )
}

export default Main