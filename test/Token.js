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
	const name = 'TritonBrass'
	const symbol = 'TRITON'
	const decimals = '18'
	const totalSupply = tokens('5000')

	it('has correct name', async () => {
		expect(await token.name()).to.equal(name)
	})

	it('has correct symbol', async () => {
		expect(await token.symbol()).to.equal(symbol) 
	})

	it('has correct decimals', async () => {
		expect(await token.decimals()).to.equal(decimals) 
	})

	it('has correct total supply', async () => {
		expect(await token.totalSupply()).to.equal(totalSupply)
	})

	it('assigns total supply to deployer', async () => {
		expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
	})

})

describe('Sending Tokens', () => {
		let amount, transaction, result

    describe('Success', () => {

      beforeEach(async () => {
        amount = tokens(100)
        transaction = await token.connect(deployer).transfer(receiver.address, amount)
        result = await transaction.wait()
      })

      it('transfers token balances', async () => {
        expect(await token.balanceOf(deployer.address)).to.equal(tokens(4900))
        expect(await token.balanceOf(receiver.address)).to.equal(amount)
      })

      it('emits a Transfer event', async () => {
        const event = result.events[0]
        expect(event.event).to.equal('Transfer')


	})

})

})


})

