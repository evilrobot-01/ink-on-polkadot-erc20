import metadata from '../assets/erc20.json';
import App from './App.tsx';
import './Global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'ui/style.css';
import { UseInkProvider } from 'useink';
import { Chain, Custom, RococoContractsTestnet } from 'useink/chains';
import { NotificationsProvider } from 'useink/notifications';

// Configuration for local substrate-contracts-node development chain
const SubstrateContractsNode: Chain = {
    ...Custom,
    id: 'custom',
    name: 'Substrate Contracts Node',
    rpcs: ['ws://localhost:9944']
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Make ink! features available to app */}
    <UseInkProvider
      config={{
        // The name that is displayed to a user when they are asked to connect their browser wallet for the first time.
        dappName: metadata.contract.name,
        // The chain configurations that your dApp will support.
        chains: [
            // Remove SubstrateContractsNode to use frontend with the Rococo Contracts testnet only
            SubstrateContractsNode,
            RococoContractsTestnet
        ]
      }}
    >
      {/* Transaction status notification tracking */}
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </UseInkProvider>
  </React.StrictMode>,
);
