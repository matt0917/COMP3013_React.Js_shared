
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { logIn } from "@/app/actions";
import { cookies } from "next/headers"
import { ErrorBox } from "@/components/ErrorBox"
import { redirect } from "next/navigation"


export default function login( {searchParams}:any ){
  const user = cookies().get("user_id")?.value;
  if (user) redirect("/blocks");
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Enter your email and password to access your account.</CardDescription>
        </CardHeader>
        <form action={logIn}>
          {searchParams?.error && <ErrorBox>{searchParams?.error}</ErrorBox>}
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <Button type="submit" className="w-full sm:w-auto">
              Sign in
            </Button>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start">
              <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
                Forgot password?
              </Link>
              <Link href="/signup" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
                Create an account
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}