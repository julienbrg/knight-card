import * as React from "react";
import { PlasmicDashboard } from "./plasmic/knight_card/PlasmicDashboard";
import { useState } from "react";
import { Orbis } from "@orbisclub/orbis-sdk";

const orbis = new Orbis();

function Dashboard_(props, ref) {

  orbis.connect();

  const [helloWorld, setHelloWorld] = useState("")

  const coucou = async () => {
    setHelloWorld("Coucou !");
    console.log("helloWorld:", helloWorld)
  }

  return <PlasmicDashboard root={{ ref }} {...props} 

    textBox={{
      props: {
        children: helloWorld
      }
    }}

    create={{
      props: {
        onClick: () => coucou()
      }
    }}

  />;
}

const Dashboard = React.forwardRef(Dashboard_);

export default Dashboard;
