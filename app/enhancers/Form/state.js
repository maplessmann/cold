import { useState } from 'react'

const state = () => {
  const [currentStep, setCurrentStep] = useState(0)

  return {
    currentStep,
    setCurrentStep,
  }
}

export default state
