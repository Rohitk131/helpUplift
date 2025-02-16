import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
// import { Icons } from "@/components/icons"

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <img src="https://preview.redd.it/t7b5j2cqpce21.png?auto=webp&s=722e7dcb6a150fc6be3513ab186cc60db0a9ab27"></img>
      <Tabs defaultValue="account" className="w-[600px] absolute">
        <TabsList className="bg-gray-100 grid w-full grid-cols-2 border border-2 rounded-2xl border-black">
          <TabsTrigger value="account" className="bg-white rounded-3xl">As Organization</TabsTrigger>
          <TabsTrigger value="password" className="bg-white rounded-3xl" >As Volunteer</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="border border-black m-10 rounded-2xl  bg-white">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Become an Organizer</CardTitle>
              <CardDescription>
                Ready to lead the change? Sign up as an organizer to initiate,
                manage, and coordinate impactful social projects. Join our
                network of passionate individuals dedicated to making a
                difference in their communities.
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
              <Button className="w-full border-2 rounded">Create account</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card className="border border-black m-10 rounded-2xl  bg-white">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
