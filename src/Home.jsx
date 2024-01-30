// import React, { useState } from 'react'
// const Home = () => {
//     //  let [count,SetCount]= useState() 
//      let [input,SetInput]= useState() 
//      const fun2=(e)=>{
//       SetInput(e.target.value)
//      }
//   // let count=0
//   // const fun1=()=>{
//   //   // console.log('hello');
//   //   // SetCount(count+1)
//   //   SetCount('pink')

//   // }
//     // setInterval(()=>{
//     //   let time=    new Date().toTimeString()
//     //   SetCount(time)
      
//     // })    
//   return (
//     <div>
//             {/* <button  onClick={()=>{SetCount('pink')}} >   pink</button> */}
//             Digital
//             {/* <p> fav color {count} </p> */}
//             <input type="text"   onChange={fun2} />
//             {/* <h2> {count}</h2> */}
//             <h3>   {input}</h3>



//             <h1> Home file</h1>
//     </div>
//   )
// }

// export default Home



import React from 'react'

const Home = () => {
  return (
    <div>



<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  height="400"  src="https://images.unsplash.com/photo-1706562017529-9224dc473ff6?q=80&w=2860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img    height="400" src="https://images.unsplash.com/photo-1706562017529-9224dc473ff6?q=80&w=2860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  height="400"  src="https://images.unsplash.com/photo-1706562017529-9224dc473ff6?q=80&w=2860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home