import FormEnhancer from 'enhancers/Form'
import { Formik, Form as FormikForm } from 'formik'

const Form = ({ initialValues, handleSubmit, validations, steps }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      {({ isSubmitting }) => (
        <FormikForm className="form">
          {steps[0].fields.map(({ component: Component, ...props }, index) => (
            <Component key={index} {...props} />
          ))}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default FormEnhancer(Form)
