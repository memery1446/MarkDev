const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', () => {
	let token

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token')
		token = await Token.deploy()
		accounts = await ethers.getSigners()
		deployer = accounts[0]
	})

	it('has correct name', async () => {
		expect(await token.name()).to.equal('TritonBrass')
	})

	it('has correct symbol', async () => {
		expect(await token.symbol()).to.equal('TRITON')
	})

	it('has correct decimals', async () => {
		expect(await token.decimals()).to.equal('18')

	})

	it('has a total supply', async () => {
		expect(await token.totalSupply()).to.equal(tokens('5000'))
	})

	it('assigns total supply to deployer', async () => {
		expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
	})
})
