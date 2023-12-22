import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <Link to={"/todo"}><button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-60">Let’s Explore</button></Link>
    </div>
  </div>
</div>
  )
}

export default Banner