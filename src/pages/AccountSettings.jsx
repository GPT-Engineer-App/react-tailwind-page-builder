import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AccountSettings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Account settings</h1>
      <Tabs defaultValue="profile">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">My Profile</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://via.placeholder.com/150" alt="Profile Picture" />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="icon" className="absolute bottom-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM4 12v4h4l10-10-4-4L4 12z" />
                </svg>
              </Button>
            </div>
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <Input type="text" placeholder="Full name" />
              </div>
              <div className="mb-4">
                <Input type="text" placeholder="Username" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <p>Settings content goes here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountSettings;