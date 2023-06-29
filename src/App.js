import logo from './logo.svg';
import React from 'react';
import { useRef,useEffect, useState } from 'react';
import './style.css';
//import Banne from './7.png';
import './App.css'


import io from "socket.io-client";
const socket=io.connect("http://localhost:3001");
//const socket=io.connect("http://user56f35051209f352.app.vtxhub.com");





function App() {
 
//var[msg,setMsg]=useState("")
var[user,setUser]=useState("")
var[myAge,setMyAge]=useState()
var[genderNumber,setGenderNumber]=useState()
var[myEmail,setMyEmail]=useState()
var[getStartTrue,isStartTrue]=useState(false)
var[musicNumber,setMusicNumber]=useState()

var[newNumber,setNewNumber]=useState()
var[newAmount,setNewAmount]=useState()
var[newPayoff,setNewPayoff]=useState()
var[newId,setNewId]=useState()
var[newTeller,setNewTeller]=useState()
var[newTime,setNewTime]=useState()
var[newDate,setNewDate]=useState()


var[newRes,setNewRes]=useState()
var[newDat,setNewDat]=useState()
var[newTim,setNewTim]=useState()
var[newFr,setNewFr]=useState()
var[newSc,setNewSc]=useState()
var setWinData


var newpst
var newhrs
var newamt
var newpay
var newrst
var newusr 
var newtm
var newdt


var newrs
var newdat
var newtim
var newfr
var newsc

var z
var a


var newPosition
var userMap

var newdata=[]
var val




 var sera
var value

 var setBetData

 


useEffect( () =>{




  
      
      },[]);
//useEffect(() => {
 //{}stringChecker()},[msgr]);
 var myData=[4]
myData[0]=user
myData[1]=myEmail
myData[2]=genderNumber
myData[3]=myAge
var myDat=JSON.stringify(myData)
var f1=1
var f2=2
var f3=3
var f4=4
var f5=5
var f6=6
var f7=0

var t1=1
var t2=2
var t3=0

var m1=1
var m2=2
var m3=3
var m4=4
var m5=5
var m6=6
var m7=0


      
  function sendUserData(){
    


         

            socket.addEventListener("click",sendUserData);
           socket.emit("send_mydata",myData);  

          // event.preventDefault()
          //alert(myData)
           };


           function sendMessage () {
   
            socket.addEventListener("click",sendMessage);
        
             socket.emit("send_message",{message:"Ab"});  
             };
            



           
     
   
var f1=1


  
  
return (
<div>

<div className="bady">
<div className="sheeper"></div>
  


   <div className="dash">  

 
 <marquee> <h1 className="spice3">MUSIC share MUSIC share MUSIC share MUSIC share MUSIC share MUSIC share MUSIC share MUSIC share MUSIC share </h1></marquee><h1 className="spice"></h1> <h1 className="spice1"></h1>
 </div>
<div className='fom'>
<form className="sady">
  <div className="mynum">
 <label className='writter'>Enter user:</label>
   <input
    disabled={getStartTrue}
   maxLength={15}
   type="text"
   required
   value={user}
   onChange={(e) => setUser(e.target.value)}>
   </input>

</div>


   <label className='writter'>Enter email:</label>
   <input
    disabled={getStartTrue}
   maxLength={30}
   type="text"
   required
   value={myEmail}
   onChange={(e) => setMyEmail(e.target.value)}>
   </input>



   <label className='writter'>Age:</label>
   <input
  disabled={getStartTrue}
   type="number"
   required
   value={myAge}
   onChange={(e) => setMyAge(e.target.value)}
   ></input>



   <label className='writter'>Gender:</label>
<select
value={genderNumber}
disabled={getStartTrue}
onChange={(e)=>setGenderNumber(e.target.value)}
>
<option value={f7}>gender...</option>
<option value={f1}>male</option>
<option value={f2}>female</option>
<option value={f3}>Refuse To Identify</option>

</select>

<label className='writter'>Favourite Music:</label>
<select
value={musicNumber}
disabled={getStartTrue}
onChange={(e)=>setMusicNumber(e.target.value)}
>
<option value={m7}>genres...</option>
<option value={m1}>POP</option>
<option value={m2}>RNB</option>
<option value={m3}>TRAP</option>
<option value={m4}>JAZZ</option>
<option value={m5}>KPOP</option>
<option value={m6}>ROCK N ROLL</option>

</select>


<button  className='left' onClick={sendUserData}>Submit</button>


   
 
</form>


</div>

</div>

<div className="phaseg">
  <div className="writter"><p>&copy;MANU Tech Kenya</p></div>
</div>


</div>





 
)

}


export default App;
