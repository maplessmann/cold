const composeEnhancer = (...layers) => BaseComponent => {
  return () => {
    const props = layers.reduce((prevProps, layer) => {
      const layerProps = layer.call(null, prevProps)

      return {
        ...prevProps,
        ...layerProps,
      }
    }, {})

    return <BaseComponent {...props} />
  }
}

export default composeEnhancer
