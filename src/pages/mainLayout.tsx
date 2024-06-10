import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Buttons } from '@/components/buttons';
import Image from 'next/image';
import LogoDark from '../../public/img/logo_dark.svg';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <div className="bg-[#f4f5f7] p-8 min-h-screen">
            <div className="border-b py-4 mb-6">
                <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto">
                    <Link href='/'>
                        <Image alt="Logo" loading="lazy" width={140} height={20} className="w-full max-w-[120px] xs:max-w-[100px]" src={LogoDark} />
                    </Link>
                    <div className="flex items-center gap-6">
                        <nav className="flex items-center gap-6">
                            <Link href='/' className={`${pathname === '/' && 'text-primary'}`}>Home</Link>
                            <Link href='/about' className={`${pathname === '/about' && 'text-primary'}`}>About</Link>
                            <Link href='/services' className={`${pathname === '/services' && 'text-primary'}`}>Services</Link>
                            <Link href='/contact' className={`${pathname === '/contact' && 'text-primary'}`}>Contact</Link>
                        </nav>
                        <div className="flex items-center gap-6 border-l px-6">
                            <Link href='#'>
                                <Buttons size="default"
                                    type="primary"
                                    className="bg-primary text-white h-11">Get Started</Buttons>
                            </Link>
                            <Link href='#'>
                                <Buttons size="default"
                                    type="primary"
                                    className="bg-primary text-white h-11 rounded-full">Light</Buttons>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default MainLayout;
