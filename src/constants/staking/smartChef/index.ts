import { ChainId } from '@conedex/conedex-sdk'
import { SmartChefPoolInfo } from '../types'
import { POLYGON_MAINNET_SMART_CHEF_POOLS } from './polygon/mainnet'
import { POLYGON_TESTNET_SMART_CHEF_POOLS } from './polygon/testnet'
import { BSC_MAINNET_SMART_CHEF_POOLS } from './bsc/mainnet'
import { BSC_TESTNET_SMART_CHEF_POOLS } from './bsc/testnet'

export const SMART_CHEF_POOL_INFOS: {
  [chainId in ChainId]?: Record<string, SmartChefPoolInfo[]>
} = {
  [ChainId.POLYGON_MAINNET]: POLYGON_MAINNET_SMART_CHEF_POOLS,
  [ChainId.POLYGON_TESTNET]: POLYGON_TESTNET_SMART_CHEF_POOLS,
  [ChainId.BSC_MAINNET]: BSC_MAINNET_SMART_CHEF_POOLS,
  [ChainId.BSC_TESTNET]: BSC_TESTNET_SMART_CHEF_POOLS
}
