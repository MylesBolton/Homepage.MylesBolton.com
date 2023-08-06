{
  "import React from 'react';",
  "import { render, screen } from '@testing-library/react';",
  "import { Icons } from './icons';",

  "describe('Icons', () => {",
    "test('renders Icons component', () => {",
      "render(<Icons />);",
      "expect(screen.getByTestId('icons')).toBeInTheDocument();",
    "});",
  "});"
}
