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

const ServerStuff: { title: string; href: string; }[] = [
  {
    title: "OVH",
    href: "https://www.ovh.com/auth/",
    },
  {
    title: "Hetzner",
    href: "https://accounts.hetzner.com/login",
    },
  {
    title: "CloudFlare",
    href: "https://dash.cloudflare.com/login",
    },
  {
    title: "Azure",
    href: "https://ms.portal.azure.com/",
    },
]

const CodeingStuff: { title: string; href: string; }[] = [
  {
    title: "Github",
    href: "https://www.netflix.com/login",
    },
  {
    title: "Codepen",
    href: "https://www.youtube.com/signin",
    },
  {
    title: "NextJS",
    href: "https://nextjs.org/docs",
    },
  {
    title: "TailWind",
    href: "https://v2.tailwindcss.com/docs",
    },
  {
    title: "Shadcn",
    href: "https://ui.shadcn.com/docs/",
    },
   {
    title: "React",
     href: "https://react.dev/reference/react",
    },
  {
    title: "Typescript",
    href: "https://www.typescriptlang.org/docs/",
    },
]
 
const Entertainment: { title: string; href: string; }[] = [
  {
    title: "Netflix",
    href: "https://www.netflix.com/login",
    },
  {
    title: "Youtube",
    href: "https://www.youtube.com/signin",
    },
  {
    title: "Disney",
    href: "https://www.disneyplus.com/login",
    },
  {
    title: "FlixerTV",
    href: "https://theflixer.tv/home",
    },
]

const OnlineServices: { title: string; href: string; }[] = [
  {
    title: "Google",
    href: "https://www.netflix.com/login",
    },
  {
    title: "ProtonMail",
    href: "https://www.youtube.com/signin",
    },
  {
    title: "Element Placeholder",
    href: "#",
    },
  {
    title: "Nextcloud Placeholder",
    href: "#",
    },
]

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>ServerStuff</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[525px] gap-3 p-4 grid-cols-2">
              {ServerStuff.map((ServerStuff) => (
                <ListItem
                  key={ServerStuff.title}
                  title={ServerStuff.title}
                  href={ServerStuff.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>CodeingStuff</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[525px] gap-3 p-4 grid-cols-2">
              {CodeingStuff.map((CodeingStuff) => (
                <ListItem
                  key={CodeingStuff.title}
                  title={CodeingStuff.title}
                  href={CodeingStuff.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Entertainment</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[525px] gap-3 p-4 grid-cols-2">
              {Entertainment.map((Entertainment) => (
                <ListItem
                  key={Entertainment.title}
                  title={Entertainment.title}
                  href={Entertainment.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>OnlineServices</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[525px] gap-3 p-4 grid-cols-2">
              {OnlineServices.map((OnlineServices) => (
                <ListItem
                  key={OnlineServices.title}
                  title={OnlineServices.title}
                  href={OnlineServices.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"