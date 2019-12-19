import * as React from 'react'
import { withInfo } from '@storybook/addon-info'
import Heading from '.'
import Readme from '../README.md'

export default {
  title: 'Components|Heading',
  component: Heading as React.FunctionComponent,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const Basic: FunctionalCSFStory = () => <Heading>Basic</Heading>

Basic.story = {
  name: 'Basic'
}

export const Info: FunctionalCSFStory = () => <Heading description="foo">withInfo</Heading>

Info.story = {
  name: 'withInfo',
  decorators: [withInfo({ inline: true })]
}
