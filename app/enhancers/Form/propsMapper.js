import { withProps } from 'utils/enhancer'
import formExperience from 'mock/formExperience'
import * as yup from 'yup'

const steps = formExperience.steps
const currentStep = 0
const currentStepFields = steps[currentStep].fields

const initialValues = {
  name: 'Matheus',
  email: '',
  phone: '',
  cpf: '',
}

const validations = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
})

const propsMapper = withProps(() => {
  return {
    initialValues,
    validations,
    currentStep,
    currentStepFields,
  }
})

export default propsMapper
