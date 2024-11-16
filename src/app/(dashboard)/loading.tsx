import { Loader } from "lucide-react";

const DashboardLoading = () => {
  return (  
    <div className="h-full flex items-center justify-center animate-pulse">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}
 
export default DashboardLoading;