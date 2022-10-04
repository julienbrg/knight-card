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

  return <PlasmicHomepage root={{ ref }} {...props} 

    tv={{
      render: () => <YouTube style={{display:"none"}} videoId="mWDZsKSGoVg" opts={opts} onReady={YouTube.playVideo} />
    }}

  />;
}

const Homepage = React.forwardRef(Homepage_);

export default Homepage;
