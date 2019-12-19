import * as React from 'react'
import { render } from '@testing-library/react'
import Heading from '.'

describe('Heading', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Heading>Children</Heading>)
    expect(container.firstChild).toMatchSnapshot()
    expect([]).toEqual(expect.toBeArray())
    expect(container.firstChild).toHaveAttribute('data-desc')
    expect(container.firstChild).not.toHaveAttribute('color')
  })
})
