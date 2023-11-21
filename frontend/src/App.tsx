import metadata from '../assets/erc20.json';
import { Erc20 } from './components';
import { DeployerProvider, InkLayout } from 'ui';

const ONE_BILLION_TOKENS = '1000000000000000000000';

function App() {
  return (
    <InkLayout
      className='md:py-12 md:p-6 p-4 h-screen flex items-center justify-center'
      animationSrc='https://raw.githubusercontent.com/paritytech/ink-workshop/d819d10a35b2ac3d2bff4f77a96701a527b3ad3a/frontend/public/dark-sea-creatures.json'
    >
      {/* Contract deployment UI */}
      <DeployerProvider
        {...{
          metadata,
          constructorArgs: { totalSupply: ONE_BILLION_TOKENS },
          constructorName: 'new',
          // Contract code hash, as found within assets/erc20.json metadata
          codeHash:
            '0xf0d3b495830fb8799ad25c55c78a4b7e8eaeb6432c3a59c9151975bee3a9feff',
        }}
      >
        {/* ERC-20 UI */}
        <Erc20 />
      </DeployerProvider>
    </InkLayout>
  );
}

export default App;
