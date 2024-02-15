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

export function Navbar() {
  return (
    <>
      <div className="w-full bg-darkk">
        <div className="h-[100px] flex items-center justify-between max-w-[1400px] mx-auto">
          <h1 className="mx-8 font-mono  text-4xl font-extrabold text-litee">
            InsightInk
          </h1>
          <div className="sm:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-litee hover:bg-litee mx-8 ${navigationMenuTriggerStyle()}`}
                  >
                    <Menu />
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-32 ">
                      <ListItem title="Write Blog" />
                      <ListItem title="Home" />
                      <ListItem title="About" />
                      <ListItem
                        title="Logout"
                        className="bg-red-500 hover:bg-red-600"
                      />
                    </ul>
                  </NavigationMenuContent>
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
