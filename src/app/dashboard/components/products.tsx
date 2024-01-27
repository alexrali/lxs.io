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
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-8 xl:grid-cols-12 xl:gap-4">

            <div className="col-span-full md:col-span-1 lg:col-span-4 xl:col-span-6">
                <ProviderEntry filter="Kimberly Clark de Mexico" />
            </div>


            <div className="col-span-full md:col-span-1 lg:col-span-4 xl:col-span-6">
                <Carousel
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

            <div className="col-span-full md:col-span-1 lg:col-span-4 xl:col-span-6">
                <ProviderTarget filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
            </div>

            <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3">
                <CardTemplate />
            </div>

            <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3">
                <CardTemplate />
            </div>

            <div className="col-span-full md:col-span-1 lg:col-span-4 xl:col-span-6">
                <SalesWow />
            </div>

            <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3">
                <ProviderInventoryValue filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
            </div>

            <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3">
                <ListCategories filter="KIMBERLY-CLARK DE MEXICO, SAB DE CV" />
            </div>
        </div>


    );
};

export default Products;
