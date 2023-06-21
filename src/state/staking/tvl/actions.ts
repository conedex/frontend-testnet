import { createAction } from '@reduxjs/toolkit'
import { ChainId } from '@conedex/conedex-sdk'
import { SerializableFraction } from '../../serialize'

export const updateTvl = createAction<{
  chainId: ChainId
  tvlType: string
  tvl?: SerializableFraction
}>('stakingTvls/update')
