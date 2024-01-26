'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";

import { Glow, GlowCapture } from "@codaworks/react-glow";

import * as React from "react"

import Autoplay from "embla-carousel-autoplay"


import { useTheme } from "next-themes"

import { Bar, BarChart } from "recharts"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// import { useConfig } from "hooks/use-config"


const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
  {
    revenue: 26475,
    subscription: 189,
  },
]




import { Overview } from "@/app/dashboard/components/overview";
import { RecentSales } from "@/app/dashboard/components/recent-sales";
import ListCategories from "./components_categories/list-categories";
import { CardsMetric } from "./components_categories/metric";
import { CardsStats } from "./components_categories/stats";
import { CardsCalendar } from "./components_categories/calendar";
import { CardsActivityGoal } from "./components_categories/activity-goal";
import { CardsChat } from "./components_categories/chat";
import { CardsCreateAccount } from "./components_categories/create-account";
import { CardsReportIssue } from "./components_categories/report-issue";
import { CardsDataTable } from "./components_categories/data-table";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import PieChartWithCustomizedActiveShape from "./components_categories/provider-inventory-value";
import MyResponsiveAreaBump from "./som-cat";
import CategoryShare from "./components_categories/category-share";
import CategoryChannel from "./components_categories/category-channel";
import CategoryRadial from "./components_categories/category-radial";
import { CategoryDetails } from "./components_categories/category-details";

export default function Summary() {

  // const { theme: mode } = useTheme()
  // const [config] = useConfig()

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (

    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="max-w-md">
          <CardsActivityGoal />
        </div>
        <div className="max-w-md">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div>
                    <CategoryDetails categoryName={"Higienico"} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xs font-bold  text-muted-foreground">Desempeño</CardTitle>
            </CardHeader>
            <CardContent >
              <Overview />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="col-span-1">
        {/* <CategoryRadial />  is not working  */}
        <div className="mt-4">
          <ListCategories filter = "KIMBERLY-CLARK DE MEXICO, SAB DE CV                         "/>
        </div>
      </div>
    </div> 
  )
}

{/* <div className="grid md:grids-col-2 md:gap-4 lg:grid-cols-8 xl:grid-cols-12 xl:gap-4">

<div className="space-y-4 lg:col-span-2 xl:col-span-3 xl:space-y-4">
  <div className="grid gap-4 col-span-2">

    <div >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs font-bold  text-muted-foreground">
            Utilidad
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tighter mt-2">$45,231.89</div>
          <p className="text-xs text-muted-foreground mt-1">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>

    <div>
      <ListCategories />
    </div>

  </div>
</div>

<div className="space-y-4 lg:col-span-6 xl:col-span-9 xl:space-y-4">
  <div className="grid grid-cols-3 gap-4">
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs font-bold text-muted-foreground ">
            Subscriptions
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tighter mt-2">+2350</div>
          <p className="text-xs text-muted-foreground mt-1">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs font-bold text-muted-foreground ">Sell Out</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tighter mt-2">+12,234</div>
          <p className="text-xs text-muted-foreground mt-1">
            +19% from last month
          </p>
        </CardContent>
      </Card>
    </div>
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs font-bold text-muted-foreground ">
            Active Now
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tighter mt-2">+573</div>
          <p className="text-xs text-muted-foreground mt-1">
            +201 since last hour
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
  <div className="grid grid-cols-3 gap-4">
    <div className="col-span-2">

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent >
          <div className="h-[300px]">
            <Overview />
          </div>
        </CardContent>
      </Card>

    </div>
    <div></div>
    <div className="col-span-2">
      {/* <CategoryChannel /> 
    </div >
  </div >

</div >
</div > * /} */}