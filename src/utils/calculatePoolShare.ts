import { Fraction, TokenAmount } from '@conedex/conedex-sdk'

export default function calculatePoolShare(baseBlockRewards: TokenAmount, poolBlockRewards: TokenAmount): Fraction {
  return new Fraction(poolBlockRewards.raw, baseBlockRewards.raw)
}
