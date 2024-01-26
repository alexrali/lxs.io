import { Metadata } from "next"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker"
import { MainNav } from "@/app/dashboard/components/main-nav"
import { Search } from "@/app/dashboard/components/search"
import TeamSwitcher from "@/app/dashboard/components/team-switcher"
import { UserNav } from "@/app/dashboard/components/user-nav"
import Summary from "@/app/dashboard/components/summary"
import Categories from "./components/categories"
import { Button } from "@/components/ui/button"
import Products from "./components/products"


export default function DashboardPage() {
  return (
    <div className="flex-col">

      {/* <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div> */}

      {/* <div className="flex items-center justify-between">
            <h1>Kimberly Clark de Mexico</h1>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>  */}

      <Tabs defaultValue="overview" className="space-y-4 pl-5 pr-5">
        <TabsList>
          <TabsTrigger value="overview">
            General
          </TabsTrigger>
          <TabsTrigger value="categories">
            Categorias
          </TabsTrigger>
          <TabsTrigger value="products">
            Productos
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Summary />
        </TabsContent>
        <TabsContent value="categories">
          <Categories />
        </TabsContent>
        <TabsContent value="products">
          <Products />
        </TabsContent>
      </Tabs>
    </div>
  )
}
