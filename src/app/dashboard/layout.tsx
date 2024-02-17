'use client'

import React, { useState } from 'react';

import { Menu } from '@/components/menu';
import { Sidebar } from '@/components/sidebar';
import { SidebarContext } from '@/components/sidebar-context';
import classNames from 'classnames';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

    const [isSidebarVisible, setSidebarVisibility] = useState(true);

    return (
        <div className="flex flex-col flex-grow">
            <SidebarContext.Provider value={{ isSidebarVisible, setSidebarVisibility }}>
                <Menu />
                <div className="border-t flex flex-col flex-grow">
                    <div className="bg-background flex-grow flex">
                        <div className=
                            {
                                classNames("transition-all duration-500 ease-in-out overflow-hidden border-r",
                                    { 'w-16 opacity-100': isSidebarVisible, 'w-0 opacity-0': !isSidebarVisible }
                                )
                            }>
                            <Sidebar />
                        </div>
                        <main className="flex-grow pt-4">
                            {children}
                        </main>
                    </div>
                </div>
            </SidebarContext.Provider>
        </div>
    )
}