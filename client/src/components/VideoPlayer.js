import React from 'react';

class VideoPlayer extends React.Component{
	constructor(props){
		super(props)
		// this.props.onClick(videoId)
	}
  render(){
    return (
      <div className="video-player">
		    <div className="embed-responsive embed-responsive-16by9">
		      <iframe className="embed-responsive-item" width={400} height={225} src={"https://www.youtube.com/embed/" + this.props.videoPlay}></iframe>
		    </div>
		    
		  </div>
      
    
    )
  };
};

export default VideoPlayer;

// const VideoPlayer = (props) => {
//   return (
//     <div>
//     </div>
//   );
// };
