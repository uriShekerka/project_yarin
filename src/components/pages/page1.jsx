import React from 'react'
import { Link } from 'react-router-dom'


const Page1 = (props) => {
  let item = props.item
  return (
    <div className='col-lg-3'>
      <Link to={"/moviesinfo/" + item.imdbID}>
        <img
          className="p-4 w-100 d-flex "
          src={item.Poster}
          alt=""
        />
      </Link>
    </div>
  )
}

export default Page1