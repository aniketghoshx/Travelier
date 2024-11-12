import Dashboard from "@/components/Dashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage () { 
  const session = await getServerSession(authOptions);
   if (!session?.user || session.user.role !== "ADMIN") {
     redirect("/");
   }
  
  return <Dashboard/>
}