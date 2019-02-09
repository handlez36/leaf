import React from 'react';
import { string } from 'prop-types'

import { Button as MyButton } from 'react-bootstrap';

const Button = ({ title, url, onClick, variant }) => {
  return (
    <MyButton
      variant={variant}
      size='lg'
      style={{ minWidth: '150px' }}
      onClick={() => onClick(url)}
      className='my-button'
    >
      {title}
    </MyButton>    
  )
}

Button.propTypes = {
  title: string.isRequired,
  url: string,
  onClick: string,
  variant: string
}

Button.defaultProps = {
  url: '#',
  variant: 'primary'
}

export default Button;