import { addDecorator, configure } from '@storybook/react'
import { addReadme } from 'storybook-readme'

addDecorator(addReadme)

configure(require.context('../..', true, /\.stor(y|ies)\.(mdx|(j|t)sx?)$/), module)
