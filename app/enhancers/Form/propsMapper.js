import { withProps } from 'utils/enhancer'
import * as yup from 'yup'

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
  }
})

export default propsMapper
