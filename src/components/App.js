import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [id,setId] = React.useState()
  const [loading,setLoading] = React.useState(false)
  const [userData, setUserData] = React.useState()
  const handleChange = (e)=>{
    setId(e.target.value)
    getData(e.target.value)
  }
  async function getData(id){
    try{
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/photos/${id}')
        const data = await res.json()
        setUserData(data)
    }
    catch(err){

    }
    finally{
        setLoading(false);
    }
  }
  return(
    <div>
     <input value={id} onChange={handleChange} type='number'/>
     {
        loading?<Loader/>: !loading && userData && id !=0? <PhotoFrame url= {userData.url} title={userData.title}/>:null
     }
     </div>
  )
}


export default App;
