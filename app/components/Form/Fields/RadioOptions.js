import { Field } from 'formik'

export default ({ options = [], name }) => {
  return options.map(({ label, value }) => {
    const model = `${name}_${value}`

    return (
      <div className="radio-options" key={value}>
        <Field id={model} type="radio" name={name} value={value} />
        <label htmlFor={model}>{label}</label>
      </div>
    )
  })
}
