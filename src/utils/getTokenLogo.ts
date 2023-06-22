import { Blockchain } from '@conedex/conedex-sdk'
import { BLOCKCHAIN } from '../connectors'
import viperTokenLogo from '../assets/images/bitcone.png'

export default function getTokenLogo(): string {
  switch (BLOCKCHAIN) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return viperTokenLogo
    case Blockchain.POLYGON:
      return viperTokenLogo
    default:
      return viperTokenLogo
  }
}
