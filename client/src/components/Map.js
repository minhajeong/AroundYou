import React from 'react';
import MapDATA from './../../data/MapDATA';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


class Map extends React.Component {
  constructor(props){
      super(props);
   this.onClick=this.onClick.bind(this);
  };

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  onClick(e) {
  
    console.log(e);;
  };

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={35.986790}
        lng={126.707212}
        zoom={17}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyApEhbvTjERHndLY1yOdaAES-Fr8-yPrCg'}}
        onMapCreated={this.onMapCreated}>
        {this.props.mapInfo.map((map, i) => {
          return (<Marker lat={map.lat} lng={map.lng} key={i} onClick={this.onClick.bind(this)} />);
        })};
        
        
      </Gmaps>
    );
  };
};

export default Map;
