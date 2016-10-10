import React from 'react';
import Header from './Header';
import Map from './Map';
import VideoInformation from './VideoInformation';
import VideoPlayer from './VideoPlayer';
import Footer from './Footer';
import '!style!css!./../styles/style.css';
import MapDATA from './../../data/MapDATA';
import VideoData from './../../data/VideoData';

console.log(window.videoData[0].title)

class App extends React.Component{
  
  constructor(props){
    super(props);
     this.state = ({
      'mapData': mapData,
      'currentVideo': videoData[0]

    });
     console.log(this.state)
     console.log(this.state.currentVideo);
     this.onClick = this.onClick.bind(this);
      
  };

  onClick(e) {
    

   const newState = {
      currentVideo: e
    };

    this.setState(newState);
  };

  render(){
    return (
      <div>
        <div id="header" >
          <div id="outer">
            <div id="inner">
              <Header />
            </div>
          </div>
        </div>
        <div id="map">
          <div id="outer">
            <div id="inner">
              <Map mapInfo={window.mapData}/>
            </div>
          </div>
        </div >
        <div id="video">
          <div id="information">
            <div id="outer">
              <div id="inner">
                  <VideoInformation videoInfo={this.state.currentVideo.title}/>
              </div>
            </div>
          </div>
          <div id="player">
            <div id="outer">
              <div id="inner">
                <VideoPlayer videoPlay={this.state.currentVideo.videoId}/>
              </div>
            </div>
          </div>
        </div>
        <div id="compare"></div>
        <div id="footer">
          <div id="outer">
            <div id="inner">
                <Footer title={this.props.footerTitle} />
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default App;

