// used to mark unsupported tokens, these are hosted lists of unsupported tokens
/**
 * @TODO add list from blockchain association
 */
export const UNSUPPORTED_LIST_URLS: string[] = []

/*
https://raw.githubusercontent.com/conedex/default-token-list/main/build/conedex-default.tokenlist.json
https://raw.githubusercontent.com/conedex/default-token-list/main/build/new_conedex-default.tokenlist.json*/
const CONEDEX_DEFAULT_LIST =
  'https://raw.githubusercontent.com/conedex/default-token-list/main/build/conedex-default.tokenlist.json'
const CONEDEX_COMMUNITY_LIST =
  'https://raw.githubusercontent.com/conedex/community-token-list/main/build/conedex-community.tokenlist.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  CONEDEX_DEFAULT_LIST,
  CONEDEX_COMMUNITY_LIST,
  ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [CONEDEX_DEFAULT_LIST]
