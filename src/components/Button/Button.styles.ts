
import { createUseStyles } from 'react-jss'
import { BrandThemes, Themes, Theme } from '@naturacosmeticos/natds-themes'
import { ButtonColor, ButtonProps } from './Button.props'
import { BrandTypes } from '../BrandTypes/BrandTypes'
import styled from 'styled-components'
import buildTheme from '../BuildTheme/buildTheme'


export type ThemeMode = keyof BrandThemes
export type Brand = keyof Omit<Themes, 'natdsTest'>






type ButtonPropsN = ButtonProps & {
  theme: Theme
}



type ButtonStyleProps = Pick<ButtonProps, 'size' | 'showIcon' | 'iconPosition' | 'variant' | 'fullWidth' | 'disabled' | 'brand' | 'textTransform' | 'color' | 'mode'>

const getPaddingStyles = (theme: Theme) => ({ size }: ButtonStyleProps) => {
  const padding = {
    semi: theme.spacing.micro,
    medium: theme.spacing.small,
    semiX: theme.spacing.tiny
  }

  return size && padding[size]
}

const onColorGet = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return 'onPrimary'
    case 'onPrimary':
      return 'primary'
    case 'secondary':
      return 'onSecondary'
    case 'onSecondary':
      return 'secondary'
    case 'surfaceInverse':
      return 'onSurfaceInverse'
    case 'onSurfaceInverse':
      return 'surfaceInverse'
    default:
      return 'primary'
  }
}
const onColorGetOutlined = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return 'highEmphasis'
    case 'onPrimary':
      return 'onPrimary'
    case 'secondary':
      return 'highEmphasis'
    case 'onSecondary':
      return 'onSecondary'
    case 'surfaceInverse':
      return 'surfaceInverse'
    case 'onSurfaceInverse':
      return 'onSurfaceInverse'
    default:
      return 'primary'
  }
}

const getColorVariant = (theme: Theme, { variant, color }: ButtonStyleProps) => {
  switch (variant) {
    case 'contained': {
      return {
        back: color ? theme.color[color] : theme.color.primary,
        border: theme.button[variant].color.enable.border,
        color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary,
        hover: {
          primary: {
            // back: `${theme.color.primaryDark}`,
            // border: theme.button[variant].color.hover.border,
            // label: `${theme.color.onPrimaryDark}`
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          onPrimary: {
            // back: theme.color.neutralLight,
            // border: theme.button[variant].color.hover.border,
            // label: theme.color.primary
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          secondary: {
            // back: theme.color.secondaryDark,
            // border: theme.button[variant].color.hover.border,
            // label: theme.color.onSecondaryDark
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          onSecondary: {
            // back: theme.color.neutralLight,
            // border: theme.button[variant].color.hover.border,
            // label: theme.color.secondary
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          surfaceInverse: {
            // back: theme.color.neutralDark,
            // border: theme.button[variant].color.hover.border,
            // label: theme.color.onSurfaceInverse
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          onSurfaceInverse: {
            // back: theme.color.neutralLight,
            // border: theme.button[variant].color.hover.border,
            // label: theme.color.surfaceInverse
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          }
        },
        focus: {
          primary: {
            back: `${theme.color.primaryDarkest}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.onPrimaryDarkest}`
          },
          onPrimary: {
            back: theme.color.neutralMedium,
            border: theme.button[variant].color.hover.border,
            label: theme.color.primary
          },
          secondary: {
            back: theme.color.secondaryDarkest,
            border: theme.button[variant].color.hover.border,
            label: theme.color.onSecondaryDarkest
          },
          onSecondary: {
            back: theme.color.neutralMedium,
            border: theme.button[variant].color.hover.border,
            label: theme.color.secondary
          },
          surfaceInverse: {
            back: theme.color.neutralMedium,
            border: theme.button[variant].color.hover.border,
            label: theme.color.onSurfaceInverse
          },
          onSurfaceInverse: {
            back: theme.color.neutralMedium,
            border: theme.button[variant].color.hover.border,
            label: theme.color.surfaceInverse
          }
        }
      }
    }
    case 'outlined': {
      return {
        back: theme.button[variant].color.enable.background,
        border: color ? theme.color[color] : theme.color.primary,
        color: color ? theme.color[onColorGetOutlined(color)] : theme.color.highlight,
        hover: {
          primary: {
            back: theme.color.neutralMedium,
            border: theme.color.primary,
            label: `${theme.color.highEmphasis}`
          },
          onPrimary: {
            back: theme.color.neutralMedium,
            border: theme.color.onPrimary,
            label: `${theme.color.highEmphasis}`
          },
          secondary: {
            back: theme.color.neutralMedium,
            border: theme.color.secondary,
            label: `${theme.color.highEmphasis}`
          },
          onSecondary: {
            back: theme.color.neutralMedium,
            border: theme.color.onSecondary,
            label: `${theme.color.highEmphasis}`
          },
          surfaceInverse: {
            back: theme.color.neutralMedium,
            border: theme.color.surfaceInverse,
            label: `${theme.color.highEmphasis}`
          },
          onSurfaceInverse: {
            back: theme.color.neutralMedium,
            border: theme.color.onSurfaceInverse,
            label: `${theme.color.highEmphasis}`
          }
        },
        focus: {
          primary: {
            back: theme.color.neutralDark,
            border: theme.color.primary,
            label: `${theme.color.lowLight}`
          },
          onPrimary: {
            back: theme.color.neutralDark,
            border: theme.color.onPrimary,
            label: `${theme.color.lowLight}`
          },
          secondary: {
            back: theme.color.neutralDark,
            border: theme.color.secondary,
            label: `${theme.color.lowLight}`
          },
          onSecondary: {
            back: theme.color.neutralDark,
            border: theme.color.onSecondary,
            label: `${theme.color.lowLight}`
          },
          surfaceInverse: {
            back: theme.color.neutralDark,
            border: theme.color.surfaceInverse,
            label: `${theme.color.lowLight}`
          },
          onSurfaceInverse: {
            back: theme.color.neutralDark,
            border: theme.color.onSurfaceInverse,
            label: `${theme.color.lowLight}`
          }
        }
      }
    }
    case 'text': {
      return {
        back: theme.button[variant].color.enable.background,
        border: theme.button[variant].color.enable.border,
        color: color ? theme.color[onColorGetOutlined(color)] : theme.color.highEmphasis,
        hover: {
          primary: {
            back: `${theme.color.neutralMedium}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onPrimary: {
            back: `${theme.color.neutralMedium}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          secondary: {
            back: `${theme.color.neutralMedium}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onSecondary: {
            back: `${theme.color.neutralMedium}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          surfaceInverse: {
            back: `${theme.color.neutralMedium}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onSurfaceInverse: {
            back: `${theme.color.neutralMedium}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          }
        },
        focus: {
          primary: {
            back: `${theme.color.neutralDark}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          onPrimary: {
            back: `${theme.color.neutralDark}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          secondary: {
            back: `${theme.color.neutralDark}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          onSecondary: {
            back: `${theme.color.neutralDark}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          surfaceInverse: {
            back: `${theme.color.neutralDark}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          onSurfaceInverse: {
            back: `${theme.color.neutralDark}`,
            border: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          }
        }
      }
    }
    default:
      return {
        back: color && theme.color.primary,
        border: theme.button.contained.color.enable.border,
        color: color && theme.color[onColorGet('primary')]
      }
  }
}

const getColorBrand = (theme: Theme) => (brand: BrandTypes, { variant, color, mode }: ButtonStyleProps) => {
  const colorTheme = buildTheme(brand, mode)
  let propBrandsColor = {}
  if (variant) {
    propBrandsColor = {
      back: getColorVariant(colorTheme, { variant, color }).back,
      border: getColorVariant(colorTheme, { variant, color }).border,
      color: getColorVariant(colorTheme, { variant, color }).color,
      hover: {
        back: getColorVariant(colorTheme, { variant, color }).hover?.[color ?? 'primary'].back,
        border: getColorVariant(colorTheme, { variant, color }).hover?.[color ?? 'primary'].border,
        label: getColorVariant(colorTheme, { variant, color }).hover?.[color ?? 'primary'].label
      },
      focus: {
        back: getColorVariant(colorTheme, { variant, color }).focus?.[color ?? 'primary'].back,
        border: getColorVariant(colorTheme, { variant, color }).focus?.[color ?? 'primary'].border,
        label: getColorVariant(colorTheme, { variant, color }).focus?.[color ?? 'primary'].label
      }
    }
  }
  if (brand) {
    return { ...propBrandsColor }
  }
  return variant && {
    back: getColorVariant(theme, { variant, color }).back,
    border: getColorVariant(theme, { variant, color }).border,
    color: getColorVariant(theme, { variant, color }).color,
    hover: {
      back: getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].back,
      border: getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].border,
      label: getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].label
    },
    focus: {
      back: getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].back,
      border: getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].border,
      label: getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].label
    }
  }
}

const getLabelMargin = (theme: Theme, side: string) => ({ showIcon, iconPosition }: ButtonStyleProps) => (showIcon && iconPosition === side && theme.size.tiny)
const getIconPosition = () => ({ showIcon, iconPosition }: ButtonStyleProps) => (showIcon && iconPosition === 'right' ? 'row' : 'row-reverse')

const getletterSpacing = (theme: Theme) => ({ textTransform }: ButtonStyleProps) => {
  if (textTransform === 'capitalize' || textTransform === 'lowercase') {
    return 1
  }
  return theme.button.label.letterSpacing
}

const getPropsThemeButton = (theme: Theme) => ({ brand }: Pick<ButtonStyleProps, 'brand'>) => {
  if (brand) {
    const themeSelectdRipple = buildTheme(brand, 'light')
    return {
      buttonborderRadius: themeSelectdRipple.button.borderRadius
    }
  }
  return {
    buttonborderRadius: theme.button.borderRadius
  }
}
const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: ({
      variant, brand, color, mode
    }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.back : getColorVariant(theme, { variant, color }).back),
    border: ({
      variant, brand, color, mode
    }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant, color, mode })?.border : getColorVariant(theme, { variant, color }).border)}`,
    borderRadius: ({ brand }: ButtonStyleProps) => getPropsThemeButton(theme)({ brand }).buttonborderRadius,
    boxShadow: ({ variant }: ButtonStyleProps) => variant && (variant === 'contained' ? theme.elevation.tiny : 'none'),
    color: ({
      variant, brand, color, mode
    }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.color : getColorVariant(theme, { variant, color }).color),
    cursor: 'pointer',
    height: ({ size }: ButtonStyleProps) => size && theme.size[size],
    outline: 0,
    overflow: 'hidden',
    paddingLeft: getPaddingStyles(theme),
    paddingRight: getPaddingStyles(theme),
    position: 'relative',
    width: ({ fullWidth }: ButtonStyleProps) => (fullWidth ? '100%' : 'auto'),
    '&:disabled': {
      backgroundColor: ({ variant }: ButtonStyleProps) => variant && theme.button[variant].color.disable.background,
      border: ({ variant }: ButtonStyleProps) => variant && `1px solid ${theme.button[variant].color.disable.border}`,
      boxShadow: theme.elevation.none,
      color: ({ variant }: ButtonStyleProps) => variant && theme.button[variant].color.disable.label,
      cursor: 'default'
    },
    '&:hover:not([disabled])': {
      backgroundColor: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.hover?.back : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].back),
      border: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant, color, mode })?.hover?.border : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].border)}`,
      color: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.hover?.label : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].label),
      opacity: ({ variant }) => (variant === 'contained' ? theme.opacity.veryHigh : 'unset')
      // opacity: theme.opacity.veryHigh
    },
    '&:focus-visible:not([disabled])': {
      backgroundColor: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.back : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].back),
      border: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.border : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].border)}`,
      color: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.label : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].label),
      opacity: ({ variant }) => (variant === 'contained' && theme.opacity.high)
      // opacity: theme.opacity.high
    },
    '&:active:not([disabled])': {
      backgroundColor: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.back : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].back),
      border: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.border : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].border)}`,
      color: ({
        variant, brand, color, mode
      }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.label : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].label),
      opacity: ({ variant }) => (variant === 'contained' && theme.opacity.high)
      // opacity: theme.opacity.high
    }
  },
  labelContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: getIconPosition(),
    justifyContent: 'center'
  },
  label: {
    fontFamily: [theme.button.label.primary.fontFamily, theme.button.label.fallback.fontFamily],
    fontSize: theme.button.label.fontSize,
    fontWeight: theme.button.label.primary.fontWeight,
    letterSpacing: ({ textTransform }: ButtonStyleProps) => getletterSpacing(theme)({ textTransform }),
    marginLeft: getLabelMargin(theme, 'left'),
    marginRight: getLabelMargin(theme, 'right'),
    textAlign: 'center',
    textOverflow: 'ellipsis',
    textTransform: ({ textTransform }) => textTransform,
    userSelect: 'none',
    whiteSpace: 'nowrap'
  }
}))



export const LabelContainer = styled.div<ButtonPropsN>`
    align-items: 'center';
    display: 'flex';
    flex-direction: ${getIconPosition()};
    justify-content: 'center';
`;

export const Label = styled.div<ButtonPropsN>`
  font-family: ${({ theme }) => `${theme.button.label.primary.fontFamily}, ${theme.button.label.fallback.fontFamily}`};
  font-size: ${({ theme }) => theme.button.label.fontSize};
  font-weight: ${({ theme }) => theme.button.label.primary.fontWeight};
  letter-spacing: ${({ textTransform, theme }) => getletterSpacing(theme)({ textTransform })};
  margin-left: ${({ theme }) => getLabelMargin(theme, 'left')};
  margin-right: ${({ theme }) => getLabelMargin(theme, 'right')};
  text-align: center;
  text-overflow: ellipsis;
  text-transform: ${({ textTransform }) => textTransform};
  user-select: none;
  white-space: nowrap;
`;




export const ButtonGaya = styled.button<ButtonPropsN>`
  background-color: ${({ variant, brand, color, mode, theme }) =>
    variant &&
    (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.back
      : getColorVariant(theme, { variant, color }).back)};
  border: ${({ variant, brand, color, mode, theme }) =>
    variant && `1px solid ${brand ? getColorBrand(theme)(brand, { variant, color, mode })?.border
      : getColorVariant(theme, { variant, color }).border}`};
  border-radius: ${({ brand, theme }) => getPropsThemeButton(theme)({ brand }).buttonborderRadius};
  box-shadow: ${({ variant, theme }) => variant && (variant === 'contained' ? theme.elevation.tiny : 'none')};
  color: ${({ variant, brand, color, mode, theme }) =>
    variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.color
      : getColorVariant(theme, { variant, color }).color)};
  cursor: pointer;
  height: ${({ size, theme }) => size && theme.size[size]};
  outline: 0;
  overflow: hidden;
  padding-left: ${({ theme }) => getPaddingStyles(theme)};
  padding-right: ${({ theme }) => getPaddingStyles(theme)};
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:disabled {
    background-color: ${({ variant, theme }) => variant && theme.button[variant].color.disable.background};
    border: ${({ variant, theme }) => variant && `1px solid ${theme.button[variant].color.disable.border}`};
    box-shadow: ${({ theme }) => theme.elevation.none};
    color: ${({ variant, theme }) => variant && theme.button[variant].color.disable.label};
    cursor: default;
  }

  &:hover:not([disabled]) {
    background-color: ${({ variant, brand, color, mode, theme }) =>
    variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.hover?.back
      : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].back)};
    border: ${({ variant, brand, color, mode, theme }) =>
    variant && `1px solid ${brand ? getColorBrand(theme)(brand, { variant, color, mode })?.hover?.border
      : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].border}`};
    color: ${({ variant, brand, color, mode, theme }) =>
    variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.hover?.label
      : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].label)};
    opacity: ${({ variant, theme }) => (variant === 'contained' ? theme.opacity.veryHigh : 'unset')};
  }

  &:focus-visible:not([disabled]) {
    background-color: ${({ variant, brand, color, mode, theme }) =>
    variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.back
      : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].back)};
    border: ${({ variant, brand, color, mode, theme }) =>
    variant && `1px solid ${brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.border
      : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].border}`};
    color: ${({ variant, brand, color, mode, theme }) =>
    variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.label
      : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].label)};
    opacity: ${({ variant, theme }) => (variant === 'contained' && theme.opacity.high)};
  }

  &:active:not([disabled]) {
    background-color: ${({ variant, brand, color, mode, theme }) =>
    variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.back
      : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].back)};
    border: ${({ variant, brand, color, mode, theme }) =>
    variant && `1px solid ${brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.border
      : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].border}`};
    color: ${({ variant, brand, color, mode, theme }) =>
    variant && (brand ? getColorBrand(theme)(brand, { variant, color, mode })?.focus?.label
      : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].label)};
    opacity: ${({ variant, theme }) => (variant === 'contained' && theme.opacity.high)};
  }
`;

export default styles
