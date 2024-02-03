import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import { Icons } from "@/components/icons"

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Card className="border border-black m-10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Become an Organizer</CardTitle>
            <CardDescription>
              Ready to lead the change? Sign up as an organizer to initiate,
              manage, and coordinate impactful social projects. Join our network
              of passionate individuals dedicated to making a difference in
              their communities.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {/* <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div> */}
          <div className="grid gap-2">
              <Label>Name of Organization</Label>
              <Input id="name" placeholder="Enter organization name" />
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input id="email" type="email" placeholder="xyz@example.com" />
            </div>
            <div className="grid gap-2">
              <Label>Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create account</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="border border-black m-10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Become a Volunteer</CardTitle>
            <CardDescription>
              Join our community and make a difference! Sign up now to create
              your account and start contributing to our social initiative
              projects. Together, we can create positive change in the world.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {/* <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div> */}
          <div className="grid gap-2">
              <Label>Your Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input id="email" type="email" placeholder="xyz@example.com" />
            </div>
            <div className="grid gap-2">
              <Label>Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
