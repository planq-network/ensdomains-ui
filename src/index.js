import { getProvider, setupWeb3, getNetworkId, getNetwork } from './web3'
import { ENS } from './ens.js'
import { setupRegistrar } from './registrar'
export { utils, ethers } from 'ethers'

export async function setupENS({
  customProvider,
  customNetwork = 'any',
  ensAddress,
  reloadOnAccountsChange,
  enforceReadOnly,
  enforceReload,
} = {}) {
  const { provider } = await setupWeb3({
    customProvider,
    customNetwork,
    reloadOnAccountsChange,
    enforceReadOnly,
    enforceReload,
    ensAddress
  })
  const networkId = await getNetworkId()
  const ens = new ENS({ provider, networkId, registryAddress: ensAddress })
  const registrar = await setupRegistrar(ens.registryAddress)
  const network = await getNetwork()
  return { ens, registrar, provider:customProvider, network, providerObject: provider }
}

export * from './ens'
export * from './registrar'
export * from './web3'
export * from './constants/interfaces'
export * from './utils'
export * from './contracts'
