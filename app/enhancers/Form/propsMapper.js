import formExperience from 'mock/formExperience'
import * as yup from 'yup'

const initialValues = {
  name: 'Matheus',
  email: '',
}

const validations = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
})

const propsMapper = () => {
  return {
    initialValues,
    validations,
    steps: formExperience.steps,
  }
}

export default propsMapper
