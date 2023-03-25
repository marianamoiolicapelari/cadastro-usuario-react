import React from 'react'

import { Button as IsButton } from "./styles";

function Button({children,buttonUsers}) {
  
    return <IsButton buttonUsers={buttonUsers}>{children}</IsButton>
}

export default Button

