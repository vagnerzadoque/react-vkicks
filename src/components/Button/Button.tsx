
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { IconColor } from '../Icon/Icon.type'
import { ButtonProps } from './Button.props'
import { Icon } from '../Icon/Icon'
import { Ripple } from '../Ripple/Ripple'
import styles from './Button.styles'
import * as React from 'react'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className = '',
  brand,
  mode = 'light',
  color,
  textTransform = 'uppercase',
  disabled = false,
  fullWidth = false,
  iconPosition = 'right',
  onClick,
  size = 'semiX',
  testID,
  type = 'button',
  variant = 'contained',
  ...rest
}, ref) => {
  const { button, label, labelContainer } = styles({
    disabled,
    color,
    brand,
    mode,
    fullWidth,
    iconPosition,
    size,
    variant,
    textTransform,
    ...rest
  })

  const theme: Theme = useTheme()
  const iconColor = theme.button[variant].color.enable.label as IconColor

  return (
    <Ripple>
      <button
        className={`${button} ${className} Button-gaya`}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type={type}
        ref={ref}
      >
        <div className={labelContainer}>
          <span className={label}>{children}</span>
          {rest.showIcon && <Icon iconName={rest.iconName} color={iconColor} />}
        </div>
      </button>
    </Ripple>
  )
})

export default Button
