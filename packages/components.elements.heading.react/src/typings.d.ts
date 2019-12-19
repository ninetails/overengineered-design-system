import '@testing-library/jest-dom/extend-expect'
import 'jest-extended'

declare module '*.md' {
  const value: string
  export default value
}

interface FunctionalCSFStory extends React.FunctionComponent {
  story?: {
    name: string
    decorators?: any[]
  }
}
