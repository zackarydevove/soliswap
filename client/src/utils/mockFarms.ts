
export interface InterfaceMockFarms {
	token1: {
		name: string,
		symbol: string,
		logoURI: string
	},
	token2: {
		name: string,
		symbol: string,
		logoURI: string
	},
	totalValueStaked: string,
	dailyReward: string,
	apr: string,
	LPAvailableInWallet: string,
	totalStaked: string,
	yourReward: string
}

export const mockFarms: InterfaceMockFarms[] = [
	{
		token1: {
			name: 'Ethereum',
			symbol: 'ETH',
			logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
		},
		token2: {
			name: 'Bitcoin',
			symbol: 'BTC',
			logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
		},
		totalValueStaked: '13,614,925',
		dailyReward: '24,156.43',
		apr: '52',
		LPAvailableInWallet: '352.12',
		totalStaked: '352.12',
		yourReward: '352.12'
	},
	{
		token1: {
			name: 'Bitcoin',
			symbol: 'BTC',
			logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
		},
		token2: {
			name: 'Tether',
			symbol: 'USDT',
			logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
		},
		totalValueStaked: '13,614,925',
		dailyReward: '24,156.43',
		apr: '52',
		LPAvailableInWallet: '352.12',
		totalStaked: '352.12',
		yourReward: '352.12'
	},
	{
		token1: {
			name: 'Bitcoin',
			symbol: 'BTC',
			logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
		},
		token2: {
			name: 'Chainlink',
			symbol: 'LINK',
			logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
		},
		totalValueStaked: '13,614,925',
		dailyReward: '24,156.43',
		apr: '52',
		LPAvailableInWallet: '352.12',
		totalStaked: '352.12',
		yourReward: '352.12'
	},
	{
		token1: {
			name: 'Bitcoin',
			symbol: 'BTC',
			logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
		},
		token2: {
			name: 'Curve',
			symbol: 'CRV',
			logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
		},
		totalValueStaked: '13,614,925',
		dailyReward: '24,156.43',
		apr: '52',
		LPAvailableInWallet: '352.12',
		totalStaked: '352.12',
		yourReward: '352.12'
	},
]