import { ChainId, Pair } from '@conedex/conedex-sdk'
import getPairTokensWithDefaults from '../../../../utils/getPairTokensWithDefaults'
import { DefaultStakingPoolInfo } from '../../types'

export const POLYGON_MAINNET_POOLS: DefaultStakingPoolInfo[] = [
  {
    pid: 0,
    order: 0,
    tokens: getPairTokensWithDefaults(ChainId.POLYGON_MAINNET, 'WONE/BUSD'),
    pairAddress: Pair.getAddress(...getPairTokensWithDefaults(ChainId.POLYGON_MAINNET, 'WONE/BUSD')),
    allocPoints: 0,
    active: false
  }
]
