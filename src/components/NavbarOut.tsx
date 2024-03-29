import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { SignInButton, SignUpButton, useClerk } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";

export function NavbarOut() {
  const clerk = useClerk();
  return (
    <>
      <div className="w-full bg-darkk mb-2">
        <div className="h-[100px] flex items-center justify-between max-w-[1200px] mx-auto">
          <h1 className="mx-8 font-mono  text-4xl font-extrabold text-litee">
            <Link to="/">InsightInk</Link>
          </h1>
          <div id="MobileNav" className="sm:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-white hover:bg-litee ${navigationMenuTriggerStyle()}`}
                  >
                    <Menu />
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-32 cursor-pointer ">
                      <ListItem title="About" />

                      <ListItem
                        onClick={() => clerk.openSignIn({})}
                        className="cursor-pointer"
                        title="Sign in"
                      />

                      <ListItem
                        onClick={() => clerk.openSignUp({})}
                        title="Get Started"
                        className="bg-red-500 hover:bg-red-600 cursor-pointer"
                      />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div id="MainNav">
            <NavigationMenu className="hidden sm:flex">
              <NavigationMenuList>
                <NavigationMenuItem className="sm:space-x-2  md:space-x-3 mx-8">
                  <NavigationMenuLink
                    className={`cursor-pointer text-white font-mono font-semibold  ${navigationMenuTriggerStyle()}`}
                  >
                    About Us
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    onClick={() => clerk.openSignIn({})}
                    className={`cursor-pointer text-white font-mono font-semibold  ${navigationMenuTriggerStyle()}`}
                  >
                    Sign in
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    onClick={() => clerk.openSignUp({})}
                    className={`bg-litee cursor-pointer rounded-full px-6 font-mono font-semibold ${navigationMenuTriggerStyle()}`}
                  >
                    Get Started
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </>
  );
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
  );
});
ListItem.displayName = "ListItem";
