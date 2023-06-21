import { ChainId, Token, WETH } from '@conedex/conedex-sdk'
import { TOKENS } from '@conedex/sdk-extra'
import { ZERO_ONE_ADDRESS } from '../constants/index'

export default function getTokenWithDefault(chainId: ChainId, symbol: string): Token {
  symbol = symbol.toUpperCase()
  let token: Token

  switch (symbol) {
    case 'WETH':
    case 'WBNB':
    case 'WMATIC':
      token = WETH[chainId]
      break
    default:
      const retrievedToken = TOKENS[chainId].firstBySymbol(symbol)
      token = retrievedToken ? retrievedToken : new Token(chainId, ZERO_ONE_ADDRESS, 18, symbol, symbol)
      break
  }

  if (
    (!token || token.address === ZERO_ONE_ADDRESS) &&
    [ChainId.POLYGON_TESTNET, ChainId.POLYGON_TESTNET].includes(chainId)
  )
    return token

  return token
}
