import {useState,useEffect} from 'react'
import axios from 'axios'
import url from '../url'
import Loading from '../components/loading'

export default function Authenticatedenterrroom(Enterroom,Authredirect){

  return function Authenticate(props){
  const [auth,setAuth]=useState(0)
  useEffect(()=>{
    const token=localStorage.getItem('token')
    const secureAxios=axios.create(
                          {
                           baseURL:url,
                           headers:{
                            "Authorization":`bearer ${token}`
                          }
                        })

      secureAxios.get('getRooms')
      .then((response)=>{
            const body=response.data
            setAuth(1)
      })
      .catch(err=>{
        //alert(err)
        setAuth(2)

      })
   })
   return (auth==0)?<Loading/>:(auth==1)?<Enterroom {...props}/>:<Authredirect redirect='signin'/>
//  return (auth)?<Home {...props}/>:<Authredirect/>
 }

}
