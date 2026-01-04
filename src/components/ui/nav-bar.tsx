import { UserButton } from "@stackframe/stack";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { stackServerApp } from "@/stack/server";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export const NavBar = async () => {
  const user = await stackServerApp.getUser();

  return (
    <nav className="w-full border-b border-stone-300 dark:border-stone-700 bg-stone-200/80 dark:bg-stone-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link
            href={"/"}
            className="font-serif text-2xl tracking-tight text-stone-800 dark:text-stone-100"
          >
            Qwiki
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        <NavigationMenu>
          <NavigationMenuList className="items-center gap-2 flex">
            {user ? (
              <NavigationMenuItem className="flex justify-end items-center p-4 gap-4 h-16">
                <UserButton />
              </NavigationMenuItem>
            ) : (
              <>
                <NavigationMenuItem>
                  <Button asChild variant={"outline"}>
                    <Link href={"/handler/sign-in"}>Sign In</Link>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button asChild>
                    <Link href={"/handler/sign-up"}>Sign Up</Link>
                  </Button>
                </NavigationMenuItem>
              </>
            )}
          </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};
