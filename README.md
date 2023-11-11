# ink! on Polkadot: ERC-20
An example ERC-20 template using the [ink!](https://use.ink/) smart contract programming language.

## Overview
ink! is an eDSL to write smart contracts in Rust for blockchains built on Substrate.
Substrate is the primary blockchain SDK used by developers to create the [parachains](https://wiki.polkadot.network/docs/learn-parachains-index) that make up the Polkadot network.
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

## Prerequisites

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
https://github.com/paritytech/substrate-contracts-node/releases. It is assumed that the binary is available in the 
root of the project folder.
  >  Note: this currently requires a custom build from the 
  > https://github.com/paritytech/substrate-contracts-node/tree/frank/feat-delayed-finalize branch until PR accepted and 
  > release made available.

### PNpM
Install the [pnpm](https://pnpm.io/installation#using-a-standalone-script) package manager.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

todo: complete commands

| Command        | Action                             |
|:---------------|:-----------------------------------|
| `pnpm install` | Installs frontend/ui dependencies. |

## Contract Compilation
Build the contract with the `verifiable` option, generating the contract metadata and bundling into a .contract file.
```shell
cargo contract build --verifiable --manifest-path=contracts/Cargo.toml
```
> Note: `--manifest-path` simply specifies the relative path to the contracts manifest file.

## 🚀 Launching

- **Run** `substrate-contracts-node`: run a local development chain
  ```shell
  ./substrate-contracts-node
  ```
- **Upload contract**: upload the contract code to the local development chain, using the Alice dev account. 
  This only needs to be done once per launch of the development chain.
  ```shell
  cargo contract upload --suri //Alice --execute --manifest-path=contracts/Cargo.toml
  ```

- **Start frontend**:
  ```shell
  pnpm install
  pnpm erc20
  ```
- **Deploy contract instance**: open the frontend in a browser
  - click **Deploy**
  - sign the transaction when prompted

## 🧪 Testing
Steps on running unit, integration and end-to-end tests can be found at [tests](./tests).

## ⚡ Deployment
- TODO: deploy contract to a testnet
- TODO: deploy to fleek

## 👀 More Information
- ink!: https://use.ink, https://github.com/paritytech/ink and https://github.com/paritytech/ink-examples.
- Substrate: https://substrate.io and https://github.com/paritytech/polkadot-sdk/tree/master/substrate.
- Polkadot: https://wiki.polkadot.network and https://github.com/paritytech/polkadot-sdk.

## 🪪 License
This sample is released into the public domain. We hope they help you build something great with ink!.

See the LICENSE file in this folder for more details.