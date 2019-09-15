import { Suspense } from 'react'

const DynamicLoad = ({ children, when }) => {
  return when && (
    <Suspense fallback={null}>
      {children}
    </Suspense>
  )
}

export default DynamicLoad
