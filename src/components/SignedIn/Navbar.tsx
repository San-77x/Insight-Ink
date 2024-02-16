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
import { Link } from "@tanstack/react-router";
import {
  RedirectToUserProfile,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/clerk-react";

export function NavbarIn() {
  return (
    <>
      <div className="w-full bg-darkk">
        <div className="h-[100px] flex items-center justify-between max-w-[1200px] mx-auto">
          <h1 className="mx-8 font-mono  text-4xl font-extrabold text-litee">
            InsightInk
          </h1>

          <div id="MobileNav" className="sm:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-litee hover:bg-litee mx-8 ${navigationMenuTriggerStyle()}`}
                  >
                    <button type="button" className="border-0">
                      <Menu />
                    </button>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-32  ">
                      <button type="button">
                        <Link to="/canvas">
                          <ListItem title="Write Blog" />
                        </Link>
                      </button>
                      <ListItem title="Home" />

                      <RedirectToUserProfile>
                        <ListItem title="Profile" />
                      </RedirectToUserProfile>
                      <SignOutButton>
                        <ListItem
                          title="Logout"
                          className="bg-red-500 hover:bg-red-600"
                        />
                      </SignOutButton>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div id="MainNav">
            <NavigationMenu className="hidden sm:flex">
              <NavigationMenuList>
                <NavigationMenuItem className="sm:space-x-2  md:space-x-3">
                  <Link to="/canvas">
                    <NavigationMenuLink
                      className={` text-white font-mono font-semibold  ${navigationMenuTriggerStyle()}`}
                    >
                      Write Blog
                    </NavigationMenuLink>
                  </Link>
                  <NavigationMenuLink
                    className={` text-white font-mono font-semibold  ${navigationMenuTriggerStyle()}`}
                  >
                    About Us
                  </NavigationMenuLink>
                  <SignInButton>
                    <NavigationMenuLink
                      className={` text-white font-mono font-semibold  ${navigationMenuTriggerStyle()}`}
                    >
                      Sign in
                    </NavigationMenuLink>
                  </SignInButton>
                  <SignUpButton>
                    <NavigationMenuLink
                      className={`bg-litee rounded-full px-6 font-mono font-semibold ${navigationMenuTriggerStyle()}`}
                    >
                      Get Started
                    </NavigationMenuLink>
                  </SignUpButton>
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
