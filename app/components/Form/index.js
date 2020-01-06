import FormEnhancer from 'enhancers/Form'
import { Formik, Form as FormikForm } from 'formik'
import FormNavigation from './Navigation'

const Form = ({
  initialValues,
  handleSubmit,
  validations,
  currentStepFields,
  nextButtonText,
  handlePrevButton,
  currentStepTitle,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      {({ isSubmitting }) => (
        <FormikForm className="form">
          <h1 className="form-title">{currentStepTitle}</h1>
          {currentStepFields.map(
            ({ component: Component, ...props }, index) => (
              <Component key={index} {...props} />
            )
          )}
          <FormNavigation
            isSubmitting={isSubmitting}
            nextButtonText={nextButtonText}
            handlePrevButton={handlePrevButton}
          />
        </FormikForm>
      )}
    </Formik>
  )
}

export default FormEnhancer(Form)
