"use client"
import Link from "next/link"
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";


interface Props {
    path: string,
    name: string
}

export const ActiveLink = ({ path, name }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === path;
  return (
   <Link href={path} className={`${style.link} ${isActive ? style.activeLink : ''}`}>
       {name}
   </Link>
  )
}
