import { Blockchain } from '@conedex/conedex-sdk'
import useBlockchain from './useBlockchain'

export default function usePlatformName(): string {
  const blockchain = useBlockchain()
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return 'ConeDEX'
    case Blockchain.POLYGON:
      return 'ConeDEX'
    case Blockchain.ETHEREUM:
      return 'ConeDEX'
    default:
      return 'ConeDEX'
  }
}
