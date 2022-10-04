import * as React from "react";
import { PlasmicHomepage } from "./plasmic/knight_card/PlasmicHomepage";
import YouTube from 'react-youtube';

function Homepage_(props, ref) {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // const _onReady = () => {
  //   // access to player in all event handlers via event.target
  //   YouTube.playVideo();
  // }

  return <PlasmicHomepage root={{ ref }} {...props} 

    tv={{
      // render: () => <YouTube style={{display:"none"}} videoId="uO8yFLF9uhM" opts={opts} onReady={YouTube.playVideo} />
      render: () => <YouTube style={{display:"none"}} videoId="mWDZsKSGoVg" opts={opts} onReady={YouTube.playVideo} />
    }}

  />;
}

const Homepage = React.forwardRef(Homepage_);

export default Homepage;
