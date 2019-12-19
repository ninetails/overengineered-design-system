import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components/macro'

interface HeadingTagProps {
  /** testing Storybook description */
  readonly color?: String
}

interface HeadingProps extends HeadingTagProps {
  children?: ReactNode
  description?: String
}

const HeadingTag = styled(({ color, ...props }) => <h1 {...props} />)`
  color: ${({ color }) => color};
`

HeadingTag.defaultProps = {
  color: 'red'
}

const Heading: FunctionComponent<HeadingProps> = ({
  children,
  color,
  description = 'default description'
}: HeadingProps = {}) => {
  return (
    <HeadingTag color={color} data-desc={description}>
      {children}
    </HeadingTag>
  )
}

export default Heading
