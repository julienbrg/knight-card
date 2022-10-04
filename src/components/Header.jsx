import * as React from "react";
import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { PlasmicHeader } from "./plasmic/knight_card/PlasmicHeader";
import { ethers } from "ethers";

function Header_(props, ref) {

  const clientId = String(process.env.REACT_APP_WEB3_AUTH_CLIENT_ID);
  const endpoint = String(process.env.REACT_APP_RPC_URL);
  const faucet = String(process.env.REACT_APP_FAUCET_PRIVATE_KEY);

  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {

        const web3auth = new Web3Auth({
          clientId: clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x3", 
            rpcTarget: endpoint,
            displayName: "Ropsten Testnet",
            blockExplorer: "https://ropsten.etherscan.io",
            ticker: "ETH",
            tickerName: "Ethereum",
          },
        });

      setWeb3auth(web3auth);

      await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        };
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const toggle = async () => {
    if (provider) {
      await logout();
    } else {
      await login();
    }
  }

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getAccounts = async () => {

    try {
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      
      // Get user's Ethereum public address
      const address = await signer.getAddress();

      console.log("address:", address)

      return address;
    } catch (error) {
      return error;
    }
  }

  return <PlasmicHeader root={{ ref }} {...props} 
  
    login={{
      props: {
        children: (!provider ? "Login" : "Logout"),
        onClick: () => toggle()
      }
    }}

    check={{
      props: {
        onClick: () => getAccounts()
      }
    }}
  
  />;
}

const Header = React.forwardRef(Header_);

export default Header;
