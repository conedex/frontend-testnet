import { ChainId } from '@conedex/conedex-sdk'
import { PitInfo } from '../types'
import { POLYGON_MAINNET_PIT_POOLS } from './polygon/mainnet'
import { POLYGON_TESTNET_PIT_POOLS } from './polygon/testnet'
import { BSC_MAINNET_PIT_POOLS } from './bsc/mainnet'
import { BSC_TESTNET_PIT_POOLS } from './bsc/testnet'

export const PIT_POOLS: {
  [chainId in ChainId]?: PitInfo[]
} = {
  [ChainId.POLYGON_MAINNET]: POLYGON_MAINNET_PIT_POOLS,
  [ChainId.POLYGON_TESTNET]: POLYGON_TESTNET_PIT_POOLS,
  [ChainId.BSC_MAINNET]: BSC_MAINNET_PIT_POOLS,
  [ChainId.BSC_TESTNET]: BSC_TESTNET_PIT_POOLS
}
