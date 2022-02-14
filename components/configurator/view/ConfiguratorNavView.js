import useConfigurator from '../../hooks/useConfigurator'
import useWeb3 from '../../hooks/useWeb3'
import { Body1 } from '../../ui/Typography'
import NavItem from '../ui/NavItem'

const ConfiguratorNavView = () => {
  const {
    flow,
    currentStep,
    previousStep,
    nextStep,
    setStep,
    previousStepAvailable,
    nextStepAvailable,
  } = useConfigurator()
  const { ens, address } = useWeb3()

  return (
    <div>
      <Body1>{ens || address}</Body1>
      {previousStepAvailable && (
        <NavItem onClick={() => previousStep()}>&lt; PREV</NavItem>
      )}
      <NavItem onClick={() => setStep('NFT')} active={currentStep === 'NFT'}>
        pfp
      </NavItem>
      <NavItem
        onClick={() => setStep('COLOR')}
        active={currentStep === 'COLOR'}
      >
        color
      </NavItem>
      <NavItem onClick={() => setStep('SAVE')} active={currentStep === 'SAVE'}>
        {flow === 'CONFIG' ? 'save' : 'mint'}
      </NavItem>
      {nextStepAvailable && (
        <NavItem onClick={() => nextStep()}>NEXT &gt;</NavItem>
      )}
    </div>
  )
}

export default ConfiguratorNavView
