import { ChainId } from '@conedex/conedex-sdk'

export const STAKING_SETTINGS: {
  [chainId in ChainId]?: Record<string, any>
} = {
  [ChainId.BSC_MAINNET]: {
    startBlock: 9498500,
    lockRewardsRatio: 95,
    unlockedRewardsRatio: 5
  },
  [ChainId.BSC_TESTNET]: {
    startBlock: 10931000,
    lockRewardsRatio: 95,
    unlockedRewardsRatio: 5
  },
  [ChainId.POLYGON_MAINNET]: {
    startBlock: 10183471,
    lockRewardsRatio: 95,
    unlockedRewardsRatio: 5
  },
  [ChainId.POLYGON_TESTNET]: {
    startBlock: 10183471,
    lockRewardsRatio: 95,
    unlockedRewardsRatio: 5
  }
}
