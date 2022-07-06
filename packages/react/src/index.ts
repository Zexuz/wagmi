export {
  Context,
  /** @deprecated use `WagmiConfig` instead */
  WagmiConfig as WagmiProvider,
  WagmiConfig,
  createClient,
  useClient,
} from './context'
export type { CreateClientConfig, WagmiConfigProps } from './context'

export {
  paginatedIndexesConfig,
  useAccount,
  useBalance,
  useBlockNumber,
  usePrepareTransaction,
  useConnect,
  useContract,
  useContractEvent,
  useContractInfiniteReads,
  useContractRead,
  useContractReads,
  useContractWritePrepared,
  useContractWriteLazy,
  useDisconnect,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsResolver,
  useFeeData,
  useInfiniteQuery,
  useNetwork,
  useProvider,
  useQuery,
  useSendTransactionLazy,
  useSendTransactionPrepared,
  useSignMessage,
  useSignTypedData,
  useSigner,
  useSwitchNetwork,
  useToken,
  useWaitForTransaction,
  useWebSocketProvider,
} from './hooks'

export { deserialize, serialize } from './utils'

export {
  AddChainError,
  ChainDoesNotSupportMulticallError,
  ChainMismatchError,
  ChainNotConfiguredError,
  Client,
  Connector,
  ConnectorAlreadyConnectedError,
  ConnectorNotFoundError,
  ContractMethodNoResultError,
  ProviderChainsNotFound,
  ProviderRpcError,
  ResourceUnavailableError,
  RpcError,
  SwitchChainError,
  SwitchChainNotSupportedError,
  UserRejectedRequestError,
  alchemyRpcUrls,
  allChains,
  chain,
  chainId,
  configureChains,
  createStorage,
  deepEqual,
  defaultChains,
  defaultL2Chains,
  erc20ABI,
  erc721ABI,
  etherscanBlockExplorers,
  infuraRpcUrls,
  publicRpcUrls,
  readContracts,
} from '@wagmi/core'
export type {
  Chain,
  ChainProviderFn,
  ConnectorData,
  ConnectorEvents,
  Storage,
  Unit,
} from '@wagmi/core'
