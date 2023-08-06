{
  "import React from 'react';",
  "import { render, screen } from '@testing-library/react';",
  "import { Button } from './button';",

  "describe('Button', () => {",
    "test('renders Button component', () => {",
      "render(<Button />);",
      "expect(screen.getByTestId('button')).toBeInTheDocument();",
    "});",
  "});"
}
