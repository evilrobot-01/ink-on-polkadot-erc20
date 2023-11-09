# ink! on Polkadot: ERC-20
An example ERC-20 template using [Next.js](https://github.com/fleekxyz/nextjs-template) and the [ink!](https://use.ink/) smart contract programming language.

## Prerequisites
- Rust & Cargo, using the [Rust installation guide](https://doc.rust-lang.org/cargo/getting-started/installation.html):
  ```shell
  curl https://sh.rustup.rs -sSf | sh
  ```
  > Rust `1.70` or later is required.
- ink! CLI, using the `cargo-contract` [installation guide](https://github.com/paritytech/cargo-contract#installation):
  ```shell
  rustup component add rust-src
  cargo install --force --locked cargo-contract@4.0.0-alpha
  ```
  > This alpha version introduces verifiable builds and will require Docker.
- `substrate-contracts-node`, a simple [Substrate](https://github.com/paritytech/polkadot-sdk#polkadot-sdk) blockchain with smart contract functionality via the `contracts` module, downloaded from https://github.com/paritytech/substrate-contracts-node/releases.
  >  `v0.29.0` or later is required.
- [pnpm](https://pnpm.io/installation#using-a-standalone-script) package manager

# Contract Compilation

- ```shell
  cd contracts
  cargo contract build --verifiable
  ```

## Running

- **Run** `substrate-contracts-node`: run a local development chain 
  ```shell
  ./substrate-contracts-node
  ```
- **Upload contract**: upload the contract code to the local development chain, using the Alice dev account
  ```shell
  cargo contract upload --suri //Alice --execute --manifest-path=contracts/Cargo.toml
  ```
  > `--manifest-path` simply specifies the path to the contracts manifest file
- **Start frontend**:
  ```shell
  pnpm install
  pnpm erc20
  ```
- **Deploy contract instance**: open the frontend in a browser
  - click **Deploy**
  - sign the transaction when prompted