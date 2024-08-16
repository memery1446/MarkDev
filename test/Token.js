const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
	let token, accounts, deployer, receiver

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token')
		token = await Token.deploy('TritonBrass', 'TRITON', '5000')
		accounts = await ethers.getSigners()
		deployer = accounts[0]
		receiver = accounts[1]
})

describe('Deployment', () => {
		const name = "TritonBrass"
		const symbol = "TRITON"
		const decimals = '18'
		const totalSupply = tokens('5000')

	it('has correct name', async () => {
		expect(await token.name()).to.equal('TritonBrass')
	})

	it('has correct symbol', async () => {
		expect(await token.symbol()).to.equal('TRITON')
	})

	it('has correct decimals', async () => {
		expect(await token.decimals()).to.equal('18')

	})

	it('has correct total supply', async () => {
		expect(await token.totalSupply()).to.equal(tokens('5000'))
	})

	it('assigns total supply to deployer', async () => {
		expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
	})

describe('Sending Tokens', () => {
		let amount

	it('transfers token balances', async () => {
		console.log('deployer balance before transfer', await token.balanceOf(deployer.address))
		console.log('receiver balance before transfer', await token.balanceOf(receiver.address))
		
		amount = tokens(100)
		let transaction = await token.connect(deployer).transfer(receiver.address, amount)
		let result = transaction.wait()

		expect(await token.balanceOf(deployer.address)).to.equal(tokens(4900))
		expect(await token.balanceOf(receiver.address)).to.equal(amount)

		console.log('deployer balance after transfer', await token.balanceOf(deployer.address))
		console.log('receiver balance after transfer', await token.balanceOf(receiver.address))

	})

})

})
})