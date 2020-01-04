import FormEnhancer from 'enhancers/Form'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'

const Form = ({ initialValues, handleSubmit, validations, steps }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      {() => (
        <FormikForm className="form">
          {steps[0].fields.map(({ name, type, label }, index) => (
            <div className="field-group" key={index}>
              <Field type={type} name={name} placeholder={label} />
              <ErrorMessage
                className="form-error"
                component="span"
                name={name}
              />
            </div>
          ))}
          <button type="submit" disabled={false}>
            Submit
          </button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default FormEnhancer(Form)
