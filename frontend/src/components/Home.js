import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Home = () => {
const [products, setProduct]= useState('')
const [loading, setLoading] = useState('')


useEffect(()=>{
  setLoading(true)
  axios.get(``)
})






  return (
    <div>Home</div>
  )
}

export default Home