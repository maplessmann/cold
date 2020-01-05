import * as yup from 'yup'
import { getFieldData } from './helpers'

const propsMapper = ({ formExperience }) => {
  const initialValues = getFieldData('initialValue', formExperience)
  const validators = getFieldData('validator', formExperience)

  return {
    initialValues,
    validations: yup.object().shape(validators),
  }
}

export default propsMapper
