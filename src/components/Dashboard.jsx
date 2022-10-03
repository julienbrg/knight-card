import * as React from "react";
import { PlasmicDashboard } from "./plasmic/knight_card/PlasmicDashboard";

function Dashboard_(props, ref) {
  
  return <PlasmicDashboard root={{ ref }} {...props} 
    
  />;
}

const Dashboard = React.forwardRef(Dashboard_);

export default Dashboard;
