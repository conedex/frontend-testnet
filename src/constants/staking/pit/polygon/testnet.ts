import { ChainId } from '@conedex/conedex-sdk'
import getPairTokensWithDefaults from '../../../../utils/getPairTokensWithDefaults'
import { PitInfo } from '../../types'

export const POLYGON_TESTNET_PIT_POOLS: PitInfo[] = [
  {
    pid: 0,
    tokens: getPairTokensWithDefaults(ChainId.POLYGON_TESTNET, 'WONE/BUSD')
  }
]
