'use client'

import React from 'react';
import { CardsActivityGoal } from './components_categories/activity-goal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CategoryDetails } from './components_categories/category-details';
import Autoplay from "embla-carousel-autoplay"
import { Overview } from './overview';
import SalesWow from './components_categories/saleswow';
import ProviderEntry from './components_categories/provider-entry';
import ProviderTarget from './components_categories/provider-target';
import CardTemplate from './components_categories/card-template';
import ListCategories from './components_categories/list-categories';
import PieChartWithCustomizedActiveShape from './components_categories/provider-inventory-value';
import ProviderInventoryValue from './components_categories/provider-inventory-value';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CardsCalendar } from './components_categories/calendar';
import { CardsMetric } from './components_categories/metric';
import { Provider } from 'jotai';
import { CardsStats } from './components_categories/stats';
import { CardsChat } from './components_categories/chat';
import { CardsCreateAccount } from './components_categories/create-account';
import { CardsReportIssue } from './components_categories/report-issue';
import { CardsDataTable } from './components_categories/data-table';
import Categories from './categories';

const Products = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        // <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8 xl:grid-cols-12">



        //     <div className="col-span-full md:col-span-2 lg:col-span-8 xl:col-span-6">
        //         <ProviderEntry filter="Kimberly Clark de Mexico" />
        //     </div>

        //     <div className="col-span-full md:col-span-2 lg:col-span-8 xl:col-span-6">
        //         <Carousel
        //             plugins={[plugin.current]}
        //             onMouseEnter={plugin.current.stop}
        //             onMouseLeave={plugin.current.reset}
        //         >
        //             <CarouselContent>
        //                 {Array.from({ length: 5 }).map((_, index) => (
        //                     <CarouselItem key={`carousel-item-${index}`} className="h-[295px] mr-4 ">
        //                         <div className='absolute h-full w-full'>
        //                             <CategoryDetails categoryName={"Higienico"} />
        //                         </div>
        //                     </CarouselItem>
        //                 ))}
        //             </CarouselContent>
        //         </Carousel>
        //     </div>

        //     <div className="col-span-full md:col-span-1 lg:col-span-4 xl:col-span-6">
        //         <ProviderTarget filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
        //     </div>

        //     <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3">
        //         <CardTemplate />
        //     </div>

        //     <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3">
        //         <CardTemplate />
        //     </div>

        //     <div className="col-span-full md:col-span-1 lg:col-span-4 xl:col-span-6">
        //         <SalesWow />
        //     </div>

        //     <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3">
        //         <ProviderInventoryValue filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
        //     </div>

        //     <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3">
        //         <ListCategories filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
        //     </div>
        // </div>

        // <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-8 xl:grid-cols-12 xl:gap-4">

        //     <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">

        //         <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4">

        //             <div className="md:col-span-4 xl:col-span-4">
        //                 <ProviderEntry filter="Kimberly Clark de Mexico" />
        //             </div>

        //             <div className="md:col-span-2 xl:col-span-2">
        //                 <ProviderTarget filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
        //             </div>

        //             <div className="md:col-span-4 xl:col-span-6">
        //                 <SalesWow />
        //             </div>

        //         </div>
        //     </div>

        //     <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        //          <CardsStats /> 
        //         <SalesWow /> 

        //         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">

        //             <div className="space-y-4 xl:space-y-4 lg:col-span-2 xl:col-span-3">
        //                 <ProviderInventoryValue filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
        //             </div>

        //             <div className="space-y-4 xl:space-y-4 lg:col-span-3 xl:col-span-3">
        //                 <ListCategories filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
        //             </div>

        //         </div>
        //     </div>
        // </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">

            <div className="grid gap-4 md:col-span-2 xl:col-span-4">

            
                <div className="md:col-span-2 xl:col-span-4">
                    <ProviderEntry filter="Kimberly Clark de Mexico" />
                </div>

                <div className="md:col-span-2 xl:col-span-4">
                    <ProviderTarget filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
                </div>
                {/* <div className="">
                    <CardTemplate />
                </div>
                <div className="">
                    <CardTemplate />
                </div> */}
                <div className="md:col-span-2 xl:col-span-4">
                    <SalesWow />
                </div>

            </div>

            {/* <div className="col-span-1 md:col-span-1 ">
                <ProviderEntry filter="Kimberly Clark de Mexico" />
            </div> */}

            {/* <div className="col-span-1 md:col-span-2" >
                <CardTemplate />
            </div>

            <div className="col-span-1 md:col-span-2">
                <SalesWow />
            </div>

            <div className="col-span-1 md:col-span-1">
                <ProviderInventoryValue filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
            </div> */}

            {/* <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                        <ProviderInventoryValue filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <ListCategories filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
                    </div>

                </div>
            </div> */}


            {/* <CardTemplate />
            <CardTemplate />
            <CardTemplate />



            <CardTemplate /> */}

            {/* <div className="col-span-2 md:col-span-2 lg:col-span-2">
                <CardTemplate />
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <CardTemplate />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <CardTemplate />
            </div>
            <div className="col-span-2 md:col-span-2 lg:col-span-2">
                <CardTemplate />
            </div> */}

        </div>

    );
};

export default Products;
