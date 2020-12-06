import React from 'react';
import './App.css';
import './style.css'
import imagetest from '.\ImageTest.jpg'
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="style">
    <h1 className="title red">My name is here</h1>
    <br/>
    <img src={process.env.PUBLIC_URL + 'public\ImageTest.jpg'} alt="Logo"/>
    <br/>
    <img src={imagetest} alt="Image"/>
    <br/>

    </div>);

}
class Video extends Component {
  render () {
      return (
      <div className='player-wrapper'>
          <ReactPlayer
          className='react-player fixed-bottom'
          url= '.\HD Epic Sax Gandalf.mp4'
          width='320'
          height='240'
          controls = {true}

          />
      </div>
      )
  }
}

export default Video;
export default App;
