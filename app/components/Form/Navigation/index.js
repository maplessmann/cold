const FormNavigation = ({ handlePrevButton, isSubmitting, nextButtonText }) => {
  return (
    <div className="form-navigation">
      <button type="button" onClick={handlePrevButton}>
        Back
      </button>
      <button type="submit" disabled={isSubmitting}>
        {nextButtonText}
      </button>
    </div>
  )
}

export default FormNavigation