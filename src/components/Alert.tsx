import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";

export function Alert({
  children,
  title,
  description,
  data,
}: {
  children: ReactElement;
  title: string;
  data: any;
  description: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-litee hover:bg-slate-400">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={data}
            className="bg-red-500 hover:bg-red-700"
          >
            <Link to="/"> Continue</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
