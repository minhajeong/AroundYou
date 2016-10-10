import React from 'react';

class VideoInformation extends React.Component{
  constructor(props){
    super(props);
    this.props.onClick
    // this.state = {
    //   VideoInformationTitle : "Video Information Title"
    // };
  };
  render(){
    return (
      <div>
        <h1>{this.props.videoInfo}</h1>
      </div>
    )
  };
};

export default VideoInformation;

// const VideoInformation = (props) => {
//   let text="textTest";
//   return (
//     <div>
//       <p>{props.title}</p>
//       {text}
//     </div>
//   );
// };
