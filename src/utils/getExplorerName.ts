import { Blockchain } from '@conedex/conedex-sdk'

export default function getExplorerName(blockchain: Blockchain): string {
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return 'BSCScan'
    case Blockchain.POLYGON:
      return 'Polygon Explorer'
    default:
      return 'Etherscan'
  }
}
