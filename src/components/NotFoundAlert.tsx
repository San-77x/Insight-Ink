import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function NotFoundAlert() {
  return (
    <div>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Missing Field Found</AlertTitle>
        <AlertDescription>Add every field to Continue</AlertDescription>
      </Alert>
    </div>
  );
}

export default NotFoundAlert;
