// import { BrowserRouter as Router, Routes, Route, renderMatches } from 'react-router-dom';
import Democlass from './components/react components/democlass';
import { Component } from 'react';

// import Apiinter from './components/apiinter';
// import Viewsdetails from './components/viewdetails';
// import Firstpage from './components/firstpage';

export default class App extends Component{
  constructor(props){
    super(props)
    this.name='kanish'
    this.age='22'
    this.place='tenkasi'
  }
  render(){
    

    return (
      <>
        <Democlass name={this.name} age={this.age} place={this.place}/>

        {/* <Router>
      <Routes>
        <Route exact path="/" element={<Apiinter/>}/>
        <Route exact path="/firspage" element={<Firstpage/>}/>
        <Route exact path="/viewdetails/:id" element={<Viewsdetails/>}/>
      </Routes>
    </Router> */}
      </>
    )
  }
}
