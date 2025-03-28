'use client';

import { Bell, Droplet, Heart, Users, LayoutDashboard, User, Settings, LogOut, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5 shrink-0 text-[#C62828]" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <User className="h-5 w-5 shrink-0 text-[#C62828]" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5 shrink-0 text-[#C62828]" />,
    },
    {
      label: "Logout",
      href: "/",
      icon: <LogOut className="h-5 w-5 shrink-0 text-[#C62828]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      <div className="flex h-screen">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "John Doe",
                  href: "/profile",
                  icon: (
                    <div className="h-7 w-7 shrink-0 rounded-full bg-[#C62828]/30 flex items-center justify-center">
                      <UserCircle className="h-5 w-5 text-[#C62828]" />
                    </div>
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-3xl font-bold text-[#FFFFFF] mb-8">
              Welcome to Your <span className="text-[#C62828]">Dashboard</span>
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-lg bg-[#2C2C2C] border border-[#444444]">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-[#C62828]" />
                  <div>
                    <p className="text-[#B0B0B0] text-sm">Your Donations</p>
                    <p className="text-2xl font-bold text-[#FFFFFF]">12</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-[#2C2C2C] border border-[#444444]">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-[#C62828]" />
                  <div>
                    <p className="text-[#B0B0B0] text-sm">Lives Impacted</p>
                    <p className="text-2xl font-bold text-[#FFFFFF]">36</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-[#2C2C2C] border border-[#444444]">
                <div className="flex items-center space-x-3">
                  <Bell className="h-6 w-6 text-[#C62828]" />
                  <div>
                    <p className="text-[#B0B0B0] text-sm">Active Requests</p>
                    <p className="text-2xl font-bold text-[#FFFFFF]">5</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-[#2C2C2C] border border-[#444444]">
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <button className="w-full bg-[#C62828] hover:bg-[#E53935] text-[#FFFFFF] py-2 rounded-md transition-colors">
                    Schedule Donation
                  </button>
                  <button className="w-full bg-transparent border border-[#C62828] text-[#C62828] hover:bg-[#C62828]/10 py-2 rounded-md transition-colors">
                    View History
                  </button>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-[#2C2C2C] border border-[#444444]">
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#E0E0E0]">Donation completed</p>
                      <p className="text-sm text-[#B0B0B0]">2 days ago</p>
                    </div>
                    <span className="text-green-500">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#E0E0E0]">Profile updated</p>
                      <p className="text-sm text-[#B0B0B0]">5 days ago</p>
                    </div>
                    <span className="text-green-500">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-[#FFFFFF]"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-[#C62828]" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-[#FFFFFF]"
      >
        BloodConnect
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="/dashboard"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-[#FFFFFF]"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-[#C62828]" />
    </Link>
  );
};