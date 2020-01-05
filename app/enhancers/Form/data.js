import { connect } from 'react-redux'
import formExperience from 'mock/formExperience'
import { getQueryStringValue } from 'utils/helpers'

const mapStateToProps = ({}, { location }) => {
  const steps = formExperience.steps
  const locationStep = getQueryStringValue('step', location)
  const currentStep = locationStep || 0
  const currentStepFields = steps[currentStep].fields
  const isLastStep = steps.length === currentStep + 1

  return {
    currentStep,
    currentStepFields,
    isLastStep,
  }
}

export default connect(mapStateToProps)
