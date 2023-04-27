import React from 'react'

import { Button as IsButton } from "./styles"

function Button({children, buttonUsers, ...props}) {
  
    return <IsButton {...props} buttonUsers={buttonUsers}>{children}</IsButton>
}

export default Button

