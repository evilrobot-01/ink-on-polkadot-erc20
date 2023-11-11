# Contract Testing
ink! supports three different stages of testing: unit, integration and end-to-end tests. 

All tests are run using the 
standard Rust `cargo test` command. More information is available at https://use.ink/basics/contract-testing and
https://doc.rust-lang.org/cargo/commands/cargo-test.html.

## Unit & Integration Testing
Unit tests are annotated with the standard Rust `#[test]` attribute within a contract. Integration tests are annotated 
with the `#[ink_e2e::test]` attribute, which executes the test in a simulated, mocked blockchain environment.

Use the following command to run all unit/integration tests _off-chain_:

```shell
pnpm contract:test
```
See the `tests` module within [contracts/lib.rs](../contracts/lib.rs) for the available unit/integration tests.
Documentation on the `#[ink::test]` attribute can be found at https://docs.rs/ink/latest/ink/attr.test.html.

## End-to-End Testing
End-to-end tests are annotated with the `#[ink_e2e::test]` attribute, which executes the test together with all components 
involved _on-chain_. This way of testing resembles closely how the contract will actually behave in production.
As part of the test, the contract will be compiled and deployed to a blockchain node that is running in the background.

Steps for installing the `substrate-contracts-node` can be found in the main [README](../README.md).

Use the following command to run all end-to-end tests.

```shell
pnpm contract:e2e-test
```
> The `CONTRACTS_NODE` environment variable can be used to specify the path to the `substrate-contracts-node` binary. 
> Amend the `contract:e2e-test` script in package.json if necessary.

See the `e2e_tests` module within [contracts/lib.rs](../contracts/lib.rs) for the available end-to-end tests.
Documentation on the `#[ink_e2e::test]` attribute can be found at https://docs.rs/ink_e2e/latest/ink_e2e/attr.test.html