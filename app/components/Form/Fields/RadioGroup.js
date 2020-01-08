import { ErrorMessage } from 'formik'
import RadioOptions from './RadioOptions'

export default ({ options, name, label }) => {
  return (
    <div className="radio-group">
      <label>{label}</label>
      <RadioOptions options={options} name={name} />
      <ErrorMessage className="field-error" component="span" name={name} />
    </div>
  )
}
