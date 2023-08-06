{
  "import React from 'react';",
  "import { render, screen } from '@testing-library/react';",
  "import { NavMenu } from './navbar';",

  "describe('NavMenu', () => {",
    "test('renders NavMenu component', () => {",
      "render(<NavMenu />);",
      "expect(screen.getByTestId('nav-menu')).toBeInTheDocument();",
    "});",
  "});"
}
