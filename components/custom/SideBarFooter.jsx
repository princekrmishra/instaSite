import { HelpCircle, icons, LogOut, Settings, Wallet } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

function SideBarFooter() {
    const router = useRouter();
    const options = [
        {
            name: "Settings",
            icon: Settings
        },
        {
            name: "Help Center",
            icon: HelpCircle
        },
        {
            name: "My Subscription",
            icon: Wallet,
            path: '/pricing'
        },
        {
            name: "Sign Out",
            icon: LogOut
        },

    ]

    const onOptionClick = (option) => {
        router.push(option.path);
    }
  return (
    <div className='p-2 mb-10'>
        {options.map((options, index) => (
            <Button variant='ghost'  onClick={() => onOptionClick(options)} className='w-full flex justify-start my-3 cursor-pointer' key={index}>
                <options.icon/>
                {options.name}
            </Button>
        ))}
    </div>
  )
}

export default SideBarFooter