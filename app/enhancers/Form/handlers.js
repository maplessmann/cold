const handlers = ({ isLastStep, currentStep, setCurrentStep }) => {
  const goToPrevStep = () => setCurrentStep(currentStep - 1)
  const goToNextStep = () => setCurrentStep(currentStep + 1)

  return {
    handlePrevButton: () => {
      if (currentStep === 0) return
      goToPrevStep()
    },

    handleSubmit: payload => {
      const submitForm = new Promise(resolve => resolve(payload))

      const handleStep = payload => {
        if (!isLastStep) {
          goToNextStep()
          return
        }

        console.log('Submiting...', payload)
      }

      return submitForm.then(handleStep)
    },
  }
}

export default handlers
