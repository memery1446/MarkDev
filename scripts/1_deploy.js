async function main() {
	
	// fetch contract
	const Token = await ethers.getContractFactory('Token')

	// deploy contracts
	const token = await Token.deploy('MarkDev', 'MDV', '5000')
	await token.deployed()
	console.log(`Token Deployed to: ${token.address}`)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});