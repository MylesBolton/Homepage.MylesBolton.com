{
  "import React from 'react';",
  "import { render, screen } from '@testing-library/react';",
  "import { DefaultBackground } from './background';",

  "describe('DefaultBackground', () => {",
    "test('renders DefaultBackground component', () => {",
      "render(<DefaultBackground />);",
      "expect(screen.getByTestId('default-background')).toBeInTheDocument();",
    "});",
  "});"
}
