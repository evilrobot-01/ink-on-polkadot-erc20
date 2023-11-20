# ink! on Polkadot: ERC-20
An example ERC-20 dApp using the [ink!](https://use.ink/) smart contract programming language.

##  👁️ Overview
ink! is an eDSL to write smart contracts in Rust for blockchains built on Substrate.
Substrate is the primary blockchain SDK used by developers to create the 
[parachains](https://wiki.polkadot.network/docs/learn-parachains-index) that make up the Polkadot network.
ink! contracts are compiled to WebAssembly.

## 🚀 Project Structure
This project is composed of the following directories and files:

```
/
├── contracts/
│   └── lib.rs
├── frontend
├── tests/
│   └── README.md
├── ui
├── README.md
└── package.json
```
The [contracts/lib.rs](./contracts/lib.rs) file contains the smart contract and associated tests. The [frontend](./frontend)
directory contains the frontend source code, which makes use of the useink UI components located within the [ui](./ui) directory.

## 🏗️ Prerequisites

### Rust

Install Rust & Cargo, using the [Rust installation guide](https://doc.rust-lang.org/cargo/getting-started/installation.html):
```shell
curl https://sh.rustup.rs -sSf | sh
```
> Note: Rust `1.70` or later is required.

### ink!

Install the ink! CLI, using the `cargo-contract` [installation guide](https://github.com/paritytech/cargo-contract#installation):
```shell
rustup component add rust-src
cargo install --force --locked cargo-contract@4.0.0-alpha
```
> Note: This alpha version introduces verifiable builds and will require Docker.

### Substrate Node

Install `substrate-contracts-node`, a simple [Substrate](https://github.com/paritytech/polkadot-sdk#polkadot-sdk) blockchain 
with smart contract functionality via the `contracts` module, downloaded from 
https://github.com/paritytech/substrate-contracts-node/releases. 
  >  Note: this currently requires a custom build from the 
  > https://github.com/paritytech/substrate-contracts-node/tree/frank/feat-delayed-finalize branch until PR accepted and 
  > release made available. It is assumed that the binary is available in the root of the project folder.

### PNpM
Install the [pnpm](https://pnpm.io/installation#using-a-standalone-script) package manager.

### Polkadot Wallet
Select and install a wallet from https://wiki.polkadot.network/docs/wallets-and-extensions#browser-extensions.
Import the default Substrate accounts (e.g. `//Alice`, `//Bob`, `//Charlie` etc.) derived from the 
[dev seed phrase]((https://github.com/paritytech/polkadot-sdk/blob/0c5dcca9e3cef6b2f456fccefd9f6c5e43444053/substrate/primitives/core/src/crypto.rs#L47)):

```bottom drive obey lake curtain smoke basket hold race lonely fit walk```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                                                                                                     |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------|
| `pnpm install`           | Installs front end/ui dependencies.                                                                        |
| `pnpm contract:build`    | Builds the contract, generating the contract metadata and bundling into a `.contract` file.                |
| `pnpm contract:upload`   | Uploads the contract code to the local development chain, using the Alice dev account.                     |
| `pnpm contract:test`     | Runs all contract unit/integration tests.                                                                  |
| `pnpm contract:e2e-test` | Runs all contract end-to-end tests.                                                                        |
| `pnpm contract:clean`    | Removes any previously generated contract artifacts.                                                       |
| `pnpm node:start`        | Starts a temporary local development chain.                                                                |
| `pnpm dev`               | Builds contract, launches `substrate-contracts-node`, uploads the contract and then launches the frontend. |

> The above scripts simplify the commands required. You can check the underlying commands they trigger in package.json

## 🚀 Launching

Install dependencies:
```shell
pnpm install
```

### Launch
Builds the contract, launches a local development chain using `substrate-contracts-node`, uploads the contract 
and then launches the frontend:
```shell
pnpm dev
```
> Note: Docker must be running in order to generate a verifiable build.

### Deploy
An _instance_ of the contract can then be deployed by opening the frontend in a browser, clicking **Deploy** and signing 
the transaction when prompted. 

> A contract's code is uploaded once and can then have multiple instances, minimizing on-chain 
storage requirements. More information can be found at https://use.ink/getting-started/deploy-your-contract.

You should now be able to interact with the contract using the options available under the **Read** and **Write** tabs.
More information can be found by inspecting the contract at [contracts/lib.rs](./contracts/lib.rs).

> Note: the address of the deployed contract is stored within the browser's local storage, under the `erc20-address` key.
> You may need to manually remove this key should you relaunch the node.


## 🧪 Testing
Steps on running unit, integration and end-to-end tests can be found at [tests](./tests).

## ⚡ Deployment

### Deploy to Testnet
- TODO: 
  - deploy contract to a testnet
  - update code to use testnet

### Deploy to Fleek

#### 1. Create a `fleek.json` config file:
You can configure this site deployment using [Fleek CLI]() and running:
```shell
 > fleek sites init
  WARN! Fleek CLI is in beta phase, use it under your own responsibility
  ? Choose one of the existing sites or create a new one. › 
  ❯ Create a new site
```
It will prompt you for a `name`, `dist` directory location & `build command`

- `name`: How you want to name the site
- `dist`: The output directory where the site is located, for this template it's `dist`
- `build command`: Command to build your site, this will be used to deploy the latest version either by CLI or Github Actions

#### 2. Deploy the site
After configuiring your `fleek.json` file, you can deployt the site by running

```shell
fleek sites deploy
```
After running it you will get an output like this:
```
 WARN! Fleek CLI is in beta, use it at your own discretion
  > Success! Deployed!
  > Site IPFS CID: QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M

  > You can visit through the gateway:
  > https://ipfs.io/ipfs/QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M
```

#### Extra features
- **Continuous Integration (CI):** `fleek sites ci` [Documentation.](https://docs.fleek.xyz/services/sites/#continuous-integration-ci)
- **Adding custom domains:** `fleek domains create` [Documentation.](https://docs.fleek.xyz/services/domains/)


## 👀 More Information
- ink!: https://use.ink, https://github.com/paritytech/ink and https://github.com/paritytech/ink-examples.
- Substrate: https://substrate.io and https://github.com/paritytech/polkadot-sdk/tree/master/substrate.
- Polkadot: https://wiki.polkadot.network and https://github.com/paritytech/polkadot-sdk.

## 🪪 License
This sample is released into the public domain. We hope they help you build something great with ink!.

See the LICENSE file in this folder for more details.