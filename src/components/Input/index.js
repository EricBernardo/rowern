import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TInput } from './styles'

function Input({ style, icon, ...res}, ref) {
  return (
    <Container>
      { icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.5)" />}
      <TInput {...res } ref={ref}/>
    </Container>
  )
}

// Input.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
// }

// Input.defaultProps = {
//   icon: null,
//   style: {}
// }

export default forwardRef(Input)