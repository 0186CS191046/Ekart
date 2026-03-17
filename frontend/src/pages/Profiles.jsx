import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label";
import { Button, Input } from "@base-ui/react";

const Profile = () => {
    return (
        <div className="pt-20 min-h-screen bg-gray-100">

            <Tabs defaultValue="profile" className="max-w-7xl mx-auto items-center">
                <TabsList>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="orders">
                        Orders
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <div>
                        <div className="flex flex-col justify-center items-center bg-gray-100">
                            <h1 className="font-bold mb-7 text-2xl text-gray-800">
                                Update profile
                            </h1>
                            <div className="w-full flex gap-10 justify-between items-start px-7 max-w-2xl">
                                {/* profile picture */}
                                <div className="flex flex-col items-center">
                                    <img src="/profile1.jpg" alt="" className="w-32 h-32 rounded-full object-cover
                                    border-4 border-green-800"/>
                                    <Label htmlFor="profile" className="mt-4 cursor-pointer bg-green-600 text-white px-4 py-2
                                    rounded-lg hover:bg-green-700">Change Picture</Label>
                                    <input type="file" id = "profile" accept="image/*" className="hidden"/>
                                </div>
                                {/* profile section */}
                                <div>
                                    <form action="" className="space-y-4 shadow-lg p-5 rounded-lg bg-white">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label className="block text-sm font-medium">FirstName</Label>
                                                <input type="text" name="firstName" placeholder="John" className="w-full border rounded-lg px-3 py-2 mt-1"/>
                                            </div>
                                            <div>
                                                <Label className="block text-sm font-medium">LastName</Label>
                                                <Input type="text" name="lastName" placeholder="Doe" className="w-full border rounded-lg px-3 py-2 mt-1"/>
                                            </div>
                                        </div>
                                         <div>
                                                <Label className="block text-sm font-medium">Email</Label>
                                                <Input type="email" name="email" placeholder="ENter your email" className="w-full border rounded-lg px-3 py-2 mt-1"/>
                                            </div>
                                             <div>
                                                <Label className="block text-sm font-medium">Phone</Label>
                                                <Input type="number" name="phone" placeholder="Enter your contact number" className="w-full border rounded-lg px-3 py-2 mt-1"/>
                                            </div>
                                            <div>
                                                <Label className="block text-sm font-medium">Address</Label>
                                                <Input type="text" name="address" placeholder="Enter your address" className="w-full border rounded-lg px-3 py-2 mt-1"/>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label className="block text-sm font-medium">City</Label>
                                                <input type="text" name="city" placeholder="Enter your city" className="w-full border rounded-lg px-3 py-2 mt-1"/>
                                            </div>
                                            <div>
                                                <Label className="block text-sm font-medium">Zipcode</Label>
                                                <Input type="text" name="zipcode" placeholder="Enter your Zipcode" className="w-full border rounded-lg px-3 py-2 mt-1"/>
                                            </div>
                                        </div>
                                        <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold
                                        py-2 rounded-lg ">Update Profile</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabsContent>
            </Tabs>

        </div>
    )
}

export default Profile;