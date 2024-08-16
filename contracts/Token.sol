// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
	string public name = 'TritonBrass';
	string public symbol = 'TRITON';
	uint256 public decimals = 18;
	uint256 public totalSupply = 5000 * (10**decimals);
}