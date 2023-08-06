{
  "import React from 'react';",
  "import { render, screen } from '@testing-library/react';",
  "import { NavigationMenu } from './navigation-menu';",

  "describe('NavigationMenu', () => {",
    "test('renders NavigationMenu component', () => {",
      "render(<NavigationMenu />);",
      "expect(screen.getByTestId('navigation-menu')).toBeInTheDocument();",
    "});",
  "});"
}
