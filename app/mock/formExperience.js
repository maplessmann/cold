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
          initialValue: 'John',
          validator: yup.string().required(),
        },
        {
          name: 'email',
          label: 'Email',
          component: Email,
          initialValue: '',
          validator: yup
            .string()
            .email()
            .required(),
        },
        {
          name: 'phone',
          label: 'Phone',
          component: Phone,
          initialValue: '',
          validator: null,
        },
        {
          name: 'cpf',
          label: 'CPF',
          component: Cpf,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Second step',
      },
      fields: [
        {
          name: 'postal_code',
          label: 'Postal code',
          component: Field,
          initialValue: '',
          validator: null,
        },
        {
          name: 'street',
          label: 'Street',
          component: Field,
          initialValue: '',
          validator: null,
        },
        {
          name: 'state',
          label: 'State',
          component: Field,
          initialValue: '',
          validator: null,
        },
        {
          name: 'city',
          label: 'City',
          component: Field,
          initialValue: '',
          validator: null,
        },
      ],
    },
  ],
}
