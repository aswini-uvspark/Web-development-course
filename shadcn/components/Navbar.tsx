import { Link, Moon } from "lucide-react"
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "radix-ui/avatar";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () =>{
    return(
        <nav className="p-4 flex items-center justify-between">
            collapseButton
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>
                <Moon/>
                
                
                <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="outline" />}>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuGroup>
                    </DropdownMenuContent>
                    </DropdownMenu>
                
            </div>

        </nav>
    );
};
export default Navbar