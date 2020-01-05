import * as yup from 'yup'

const initialValues = {
  name: 'Matheus',
  email: '',
  phone: '',
  cpf: '',
  postal_code: '',
  street: '',
  state: '',
  city: '',
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
  }
}

export default propsMapper
