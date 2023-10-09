import metadata from '../assets/erc20.json';
import App from './App.tsx';
import './Global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'ui/style.css';
import { UseInkProvider } from 'useink';
import { Chain, Custom, RococoContractsTestnet } from 'useink/chains';
import { NotificationsProvider } from 'useink/notifications';

const SubstrateContractsNode: Chain = {
    ...Custom,
    id: 'custom',
    name: 'Substrate Contracts Node',
    rpcs: ['ws://localhost:9944']
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UseInkProvider
      config={{
        dappName: metadata.contract.name,
        chains: [SubstrateContractsNode, RococoContractsTestnet],
        caller: {
          default: '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR',
        },
      }}
    >
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </UseInkProvider>
  </React.StrictMode>,
);
