import { ChainId, Currency, ETHER, POLYGON, BINANCE_COIN, WETH } from '@conedex/conedex-sdk'
import { NETWORK_CHAIN_ID } from '../connectors'

export default function baseCurrencies(chainId: ChainId | undefined): Currency[] {
  const currencies: Currency[] = []

  if (chainId) {
    switch (chainId) {
      case ChainId.BSC_MAINNET:
      case ChainId.BSC_TESTNET:
        currencies.push(BINANCE_COIN)
        currencies.push(WETH[chainId])
        break
      case ChainId.POLYGON_MAINNET:
      case ChainId.POLYGON_TESTNET:
        currencies.push(POLYGON)
        currencies.push(WETH[chainId])
        break
      default:
        currencies.push(ETHER)
        currencies.push(WETH[chainId])
        break
    }
  } else {
    currencies.push(ETHER)
    currencies.push(WETH[NETWORK_CHAIN_ID as ChainId])
  }

  return currencies
}
