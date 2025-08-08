import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const NavbarItems = [
    
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
    {name: 'Pricing', href: '/pricing'},
];
export const Navbar = () => {
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded '>
            <Link href="/" className="flex items-center">
                <HomeIcon className="mr-1"/>
                <span>Home </span>
            </Link>
            <div className='flex flex-1 justify-end gap-x-2'>
                {NavbarItems.map((item) => (
                    <ActiveLink key={item.href} path={item.href} name={item.name} />
                ))}
            </div>

        </nav>
    )
}
