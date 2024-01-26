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

const Products = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            <div className="col-span-2">
                {/* This is a card */}
                <ProviderEntry filter="Kimberly Clark de Mexico" />
            </div>

            <div className="col-span-3 relative">
                <Carousel
                    // className='w-full overflow-hidden'
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="h-[295px] mr-4 ">
                                <div className='absolute h-full w-full'>
                                    <CategoryDetails categoryName={"Higienico"} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="col-span-3">    
                {/* This is a card */}
                <ProviderTarget filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV                         " />
            </div>

            {/* This is a card */}
            <CardTemplate />
            {/* This is a card */}
            {/* <CardTemplate /> */}
            <CardTemplate />

            <div className="col-span-3">
                {/* This is a card */}
                <SalesWow />
            </div>

            <div className="col-span-1 space-y-2">
                {/* This is a card */}
                <ProviderInventoryValue />
            </div>

            <ListCategories />
        </div>


    );
};

export default Products;
