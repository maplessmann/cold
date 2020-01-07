import * as yup from 'yup'
import { getFieldData } from './helpers'

const propsMapper = ({ formExperience, currentStep }) => {
  const initialValues = getFieldData('initialValue', formExperience)
  const validators = getFieldData('validator', formExperience, currentStep)

  return {
    initialValues,
    validations: yup.object().shape(validators),
  }
}

export default propsMapper
