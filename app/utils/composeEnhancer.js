const composeEnhancer = (...layers) => Component => {
  return () => {
    const props = layers.reduce((prevProps, layer) => {
      const layerProps = layer.call(null, prevProps)

      return {
        ...prevProps,
        ...layerProps,
      }
    }, {})

    return <Component {...props} />
  }
}

export default composeEnhancer
