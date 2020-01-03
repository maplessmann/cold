const composeEnhancer = (layers = {}) => Component => {
  return () => {
    const props = Object.values(layers).reduce((prevProps, layer) => {
      const layerProps = layer.call()

      return {
        ...prevProps,
        ...layerProps,
      }
    }, {})

    return <Component {...props} />
  }
}

export default composeEnhancer
