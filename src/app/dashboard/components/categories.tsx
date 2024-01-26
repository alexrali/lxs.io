import { CardsActivityGoal }
  from "@/app/dashboard/components/components_categories/activity-goal"

import { CardsCalendar }
  from "@/app/dashboard/components/components_categories/calendar"

import { CardsChat }
  from "@/app/dashboard/components/components_categories/chat"

import { CardsCookieSettings }
  from "@/app/dashboard/components/components_categories/cookie-settings"

import { CardsCreateAccount }
  from "@/app/dashboard/components/components_categories/create-account"

import { CardsDataTable }
  from "@/app/dashboard/components/components_categories/data-table"

import { CardsMetric }
  from "@/app/dashboard/components/components_categories/metric"

import { CardsPaymentMethod }
  from "@/app/dashboard/components/components_categories/payment-method"

import { CardsReportIssue }
  from "@/app/dashboard/components/components_categories/report-issue"

import { CardsShare }
  from "@/app/dashboard/components/components_categories/share"

import { CardsStats }
  from "@/app/dashboard/components/components_categories/stats"

import { CardsTeamMembers }
  from "@/app/dashboard/components/components_categories/team-members"

import ListCategories from "@/app/dashboard/components/components_categories/list-categories"

// import { Clients }
//   from "@/app/dashboard/components/components_categories/clients"

import React, { Suspense, lazy, ComponentType } from 'react';

// @ts-ignore
const Clients = lazy(() => import('@/app/dashboard/components/components_categories/clients') as Promise<{ default: ComponentType }>);

export default function Categories() {
  return (

    <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-8 xl:grid-cols-12 xl:gap-4">


      <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        <CardsStats />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="space-y-4 xl:space-y-4">
            <ListCategories />
          </div>
          <div className="space-y-4 xl:space-y-4">
            <CardsChat />
            <CardsCreateAccount />
            <div className="hidden xl:block">
              <CardsReportIssue />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        <div className="hidden gap-1 sm:grid-cols-[260px_1fr] md:grid">
          <CardsCalendar />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-3">
            <CardsMetric />
          </div>
        </div>
        <div className="hidden md:block">
          <CardsDataTable />
        </div>
        <div className="xl:hidden">
          <CardsReportIssue />
        </div>
      </div>
    </div>

  )
}

