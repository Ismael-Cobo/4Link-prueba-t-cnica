import styled from 'styled-components'

interface ButtonProps {
  isActive: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ isActive }) => (isActive ? '#c8c3c3' : 'inherit')};
`
