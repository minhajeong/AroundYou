import React from 'react';
import MapDATA from './../../data/MapDATA';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


class Map extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        mapData:[
      {lat: 35.986790, lng: 126.707212},
      {lat: 35.986352, lng: 126.706207},
      {lat: 35.987872, lng: 126.708499}
      ]
    };
  };

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  onDragEnd(e) {};

  onClick(e) {
    console.log('onClick', e);
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
        {this.state.mapData.map((map, i) => {
          return (<Marker lat={map.lat} lng={map.lng} key={i} draggable={true} onClick={this.onClick} onDragEnd={this.onDragEnd}/>);
        })};
        
        {/*//})}
        // <Marker
        //   lat={coords[0].lat}
        //   lng={coords[0].lng}
        //   draggable={true}
        //   content={'Hello, React :)'}
        //   onClick={this.onClick}
        //   onDragEnd={this.onDragEnd} />
        // <Marker
        //   lat={coords[1].lat}
        //   lng={coords[1].lng}
        //   draggable={true}
        //   onClick={this.onClick}
        //   onDragEnd={this.onDragEnd} />
        // <Marker
        //   lat={coords[2].lat}
        //   lng={coords[2].lng}
        //   draggable={true}
        //   onClick={this.onClick}
        //   onDragEnd={this.onDragEnd} />*/}
      </Gmaps>
    );
  };
};

export default Map;
