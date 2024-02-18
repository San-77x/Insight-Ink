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
  SignOutButton,
  UserProfile,
  useUser,
} from "@clerk/clerk-react";

export function NavbarIn() {
  const { user } = useUser();
  const handleClick = () => {
    <RedirectToUserProfile />;
    <UserProfile />;
    console.log("heyyy");
  };
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
                    <button type="button" className="border-0 cursor-pointer">
                      <Menu />
                    </button>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-32 cursor-pointer ">
                      <Link to="/canvas">
                        <ListItem title="Write Blog" />
                      </Link>
                      <ListItem title="About" />

                      <ListItem onClick={handleClick} title="Profile" />

                      <SignOutButton>
                        <ListItem
                          title="Logout"
                          className="bg-red-500 hover:bg-red-600 cursor-pointer"
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
                <NavigationMenuItem className="sm:space-x-2  md:space-x-3 mx-8">
                  <Link to="/canvas">
                    <NavigationMenuLink
                      className={`cursor-pointer text-white font-mono font-semibold  ${navigationMenuTriggerStyle()}`}
                    >
                      Write Blog
                    </NavigationMenuLink>
                  </Link>

                  <NavigationMenuLink
                    className={`cursor-pointer text-white font-mono font-semibold  ${navigationMenuTriggerStyle()}`}
                  >
                    About Us
                  </NavigationMenuLink>

                  <SignOutButton>
                    <NavigationMenuLink
                      className={`cursor-pointer text-white font-mono font-semibold  ${navigationMenuTriggerStyle()}`}
                    >
                      Sign out
                    </NavigationMenuLink>
                  </SignOutButton>

                  <NavigationMenuLink
                    className={`cursor-pointer bg-litee rounded-full font-mono font-semibold ${navigationMenuTriggerStyle()}`}
                  >
                    {user?.username}
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
