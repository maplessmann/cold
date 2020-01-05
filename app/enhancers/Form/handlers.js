const handlers = ({ isLastStep, currentStep, setCurrentStep }) => ({
  handleSubmit: payload => {
    console.log('Form submitted!', payload)

    if (!isLastStep) {
      setCurrentStep(currentStep + 1)
    }
  },
})

export default handlers
