import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Pagination } from '@material-ui/lab';
import './app.css';

const App = () => {
   const [state, setstate] = useState(1);
   const [apidata, setdata] = useState([]);

   const loaddata = async ()=>{
       const response = await axios.get(`https://reqres.in/api/users?page=${state}`)
    //    console.log(response.data.data);
       setdata(response.data.data);
   }
   
   useEffect(() => {
       loaddata();
   })
  return(<>
  <h1 className="heading">USER PROFILE</h1>
               <div className="outer_div">

              {apidata.map(valu=>{
                  return(
                      <>
                      <div className="inner_div">
                  <img src={valu.avatar} alt="nop" />
                      <h1>{valu.first_name} {valu.last_name}</h1>
                  <h2>{valu.email}</h2>
                      </div>
                      </>
                  )
              })}
               </div>
      <Pagination
      className="pagination"
          count={2}
          color='primary'
          onChange={(e,val)=>setstate(val)}
      />
  </>)
};

export default App;