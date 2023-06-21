import { ChainId } from '@conedex/conedex-sdk'
import { DefaultStakingPoolInfo } from '../types'
import { POLYGON_MAINNET_POOLS } from './polygon/mainnet'
import { POLYGON_TESTNET_POOLS } from './polygon/testnet'
import { BSC_MAINNET_POOLS } from './bsc/mainnet'
import { BSC_TESTNET_POOLS } from './bsc/testnet'

export const DEFAULT_STAKING_POOL_INFOS: {
  [chainId in ChainId]?: DefaultStakingPoolInfo[]
} = {
  [ChainId.POLYGON_MAINNET]: POLYGON_MAINNET_POOLS,
  [ChainId.POLYGON_TESTNET]: POLYGON_TESTNET_POOLS,
  [ChainId.BSC_MAINNET]: BSC_MAINNET_POOLS,
  [ChainId.BSC_TESTNET]: BSC_TESTNET_POOLS
}
