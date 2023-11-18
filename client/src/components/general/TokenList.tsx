import React, { useEffect, useState } from 'react';
import { TokenInterface } from '../../interfaces/TokenInterface';
import axios from 'axios';

interface TokenListProps {
	  selectToken: (token: TokenInterface) => void
}

interface UniswapToken {
	chainId: number;
	address: string;
	name: string;
	symbol: string;
	decimals: number;
	logoURI: string;
}

const TokenList: React.FC<TokenListProps> = ({ selectToken }) => {
  const [tokens, setTokens] = useState<UniswapToken[] | []>([]);

  useEffect(() => {
	  axios.get("https://raw.githubusercontent.com/Uniswap/default-token-list/master/src/tokens/mainnet.json")
      .then(data => setTokens(data.data))
      .catch(error => console.error('Error fetching Uniswap tokens:', error));
  }, []);

  console.log(tokens);

  if (!tokens) return null;

  return (
    <div className='overflow-auto hide-scrollbar flex-1'>
      {tokens.map(token => (
		
		<div className='flex items-center gap-4 px-4 py-2 bg-[#131313] hover:bg-gray-500 hover:bg-opacity-50 hover:cursor-pointer' 
			key={token.address}
			onClick={() => selectToken(token)}>
          <img className='h-12 w-12 rounded-full' src={token.logoURI} alt={token.name}/>
		  <div>
			<p className='text-white'>{token.name}</p>
			<p className='text-sm text-gray-500'>{token.symbol}</p>
		  </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;