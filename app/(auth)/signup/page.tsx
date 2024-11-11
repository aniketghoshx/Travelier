import { SignUpForm } from "@/components/SignUpForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const SignUp = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/")
  }

  return (
    <SignUpForm/>
  )
}

export default SignUp;