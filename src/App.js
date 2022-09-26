import React from 'react'

import { Container, H1 } from './styles'

const App = () => {
const hello = "Hello React"

  return (
    <Container>
      <H1> {hello} </H1>
    </Container>
  )
}

export default App