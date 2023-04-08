import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
const App = () =>{
  
  // const state = {
  //   progress:0
  // }

  const [progress, setProgress] = useState(0)

  const apiKey = process.env.REACT_APP_API

  // const setProgress = (progress) =>{
  //   this.setState({progress:progress})
  // }

  // render() {
    return (
      <div>
          <Router>
            <Navbar/> 
            <LoadingBar
              color='#f11946'
              progress={progress}
              height={3}
            />
            <Routes>
              <Route exact path='/' element = {<News setProgress={setProgress} apiKey = {apiKey} key='/' pageSize = {6} category = 'general' country = 'in'/>}/>
              <Route exact path='/business' element = {<News setProgress={setProgress} apiKey = {apiKey} key='business' pageSize = {6} category = 'business' country = 'in'/>}/>
              <Route exact path='/science' element = {<News setProgress={setProgress} apiKey = {apiKey} key='science' pageSize = {6} category = 'science' country = 'in'/>}/>
              <Route exact path='/sports' element ={<News setProgress={setProgress} apiKey = {apiKey} key='sports' pageSize = {6} category = 'sports' country = 'in'/>}/>
              <Route exact path='/entertainment' element = {<News setProgress={setProgress} apiKey = {apiKey} key='entertainment' pageSize = {6} category = 'entertainment' country = 'in'/>}/>
              <Route exact path='/health' element ={<News setProgress={setProgress} apiKey = {apiKey} key='health' pageSize = {6} category = 'health' country = 'in'/>}/>
              {/* <Route exact path='/technology' element = {<News setProgress={setProgress} apiKey = {apiKey} key='technology' pageSize = {6} category = 'technology' country = 'in'/>}/> */}
            </Routes>
          
        </Router>
      </div>
    )
  }
// }

export default App;