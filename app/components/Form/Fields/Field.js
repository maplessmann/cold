import { Field, ErrorMessage } from 'formik'

const Text = ({ name, type = 'text', label }) => {
  return (
    <div className="field-group">
      <Field type={type} name={name} placeholder={label} />
      <ErrorMessage className="field-error" component="span" name={name} />
    </div>
  )
}

export default Text