"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavbarConfig } from "@/src/Navbar.config"

export function NavMenu() {
  return (
      <NavigationMenu>
        <NavigationMenuList>
          {Object.keys(NavbarConfig).map((dropdownName,) => (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{dropdownName}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[525px] gap-3 p-4 grid-cols-4">
                  {NavbarConfig[dropdownName].map((config, configIndex) => (
                    <ListItem key={configIndex} title={config.title} href={config.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
  );
};


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <a className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </a>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"