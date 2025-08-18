'use client'

import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { 
  Home, 
  Info, 
  Users, 
  CreditCard, 
  Map, 
  DollarSign, 
  Users2, 
  Megaphone, 
  Award, 
  Code, 
  BarChart3, 
  Ticket, 
  Calendar, 
  Building2, 
  Plus, 
  HelpCircle, 
  User 
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const mainItems = [
  { title: "Dashboard", url: "#", icon: Home },
  { title: "Basic Info", url: "#", icon: Info },
  { title: "Team Management", url: "#", icon: Users },
  { title: "Payment Information", url: "#", icon: CreditCard },
  { title: "Seating Maps", url: "#", icon: Map },
  { title: "Charge Rates", url: "#", icon: DollarSign },
  { title: "Audience", url: "#", icon: Users2 },
  { title: "Marketing", url: "#", icon: Megaphone },
  { title: "Accreditation", url: "#", icon: Award },
  { title: "Developers", url: "#", icon: Code },
  { title: "Reports", url: "#", icon: BarChart3 },
  { title: "Membership / Season Tickets", url: "#", icon: Ticket },
]

const eventItems = [
  { title: "Manage My Events", url: "#", icon: Calendar },
  { title: "Back to Organisations", url: "#", icon: Building2 },
]

const actionItems = [
  { title: "Host An Event", url: "#", icon: Plus },
  { title: "Help", url: "#", icon: HelpCircle },
  { title: "My Account", url: "#", icon: User },
]

export function AppSidebar() {
  const handleClick = (itemTitle) => {
    toast.info(`User Clicked ${itemTitle}`)
  }

  return (
    <Sidebar>
      <SidebarHeader> 
        <div className="px-4 py-3">
          <h1 className="text-5xl font-black font-anton text-center">
            <span style={{ color: '#25b24b' }}>DEMO</span>
            <span style={{ color: '#ffffff' }}>TIX</span>
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup> 
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-all duration-200 ease-in-out" onClick={() => handleClick(item.title)}>
                    <Link href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mx-2 my-1 h-px bg-sidebar-border" />
        
        <SidebarGroup> 
          <SidebarGroupContent>
            <SidebarMenu>
              {eventItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-all duration-200 ease-in-out" onClick={() => handleClick(item.title)}>
                    <Link href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mx-2 my-1 h-px bg-sidebar-border" />
        
        <SidebarGroup> 
          <SidebarGroupContent>
            <SidebarMenu>
              {actionItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-all duration-200 ease-in-out" onClick={() => handleClick(item.title)}>
                    <Link href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}