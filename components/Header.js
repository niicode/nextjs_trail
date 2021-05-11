import {
    BadgeCheckIcon,
    HomeIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon,
    LightningBoltIcon
} from "@heroicons/react/outline"
import Image from 'next/image'
import HeaderItem from './HeaderItem'

export default function Header() {
    return (
        <header className= "flex flex-col sm:flex-row m-5 h-auto justify-between item-center">
            <div className= 'flex flex-grow justify-evenly max-w-2xl'>
               <HeaderItem title="HOME" Icon={HomeIcon}/>
               <HeaderItem title= "TRENDING" Icon={LightningBoltIcon}/>
               <HeaderItem title= "VERIFIED" Icon={BadgeCheckIcon}/>
               <HeaderItem title= "COLLECTIONS" Icon={CollectionIcon}/>
               <HeaderItem title= "SEARCH" Icon={SearchIcon}/>
               <HeaderItem title= "ACCOUNT" Icon={UserIcon}/>

            </div>
            <Image 
            className= "object-contain"
            src='https://links.papareact.com/ua6' 
                width={200}
                height={100}
            />
        </header>
    )
}
