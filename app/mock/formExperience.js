import * as yup from 'yup'
import Field from 'components/Form/Fields/Field'
import Email from 'components/Form/Fields/Email'
import Phone from 'components/Form/Fields/Phone'
import Cpf from 'components/Form/Fields/Cpf'

export default {
  steps: [
    {
      header: {
        title: 'First step',
      },
      fields: [
        {
          name: 'name',
          label: 'Name',
          component: Field,
        },
        {
          name: 'email',
          label: 'Email',
          component: Email,
        },
        {
          name: 'phone',
          label: 'Phone',
          component: Phone,
        },
        {
          name: 'cpf',
          label: 'CPF',
          component: Cpf,
        },
      ],
    },
  ],
}
