import { SignInForm } from "@/components/SignInForm"
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const SignIn =  async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/");
  }
  return (
      <SignInForm/>
  )
}

export default SignIn
