import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
     home page
     <SignInButton>
      <Button>Login</Button>
     </SignInButton>
    </div>
  );
}
