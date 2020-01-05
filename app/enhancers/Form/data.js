import formExperience from 'mock/formExperience'

const data = ({ currentStep }) => {
  const steps = formExperience.steps
  const currentStepFields = steps[currentStep].fields
  const isLastStep = steps.length === currentStep + 1
  const nextButtonText = isLastStep ? 'Submit': 'Next'

  return {
    formExperience,
    currentStepFields,
    isLastStep,
    nextButtonText,
  }
}

export default data