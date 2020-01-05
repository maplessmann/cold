import formExperience from 'mock/formExperience'

const data = ({ currentStep }) => {
  const steps = formExperience.steps
  const currentStepFields = steps[currentStep].fields
  const isLastStep = steps.length === currentStep + 1

  return {
    currentStepFields,
    isLastStep,
  }
}

export default data