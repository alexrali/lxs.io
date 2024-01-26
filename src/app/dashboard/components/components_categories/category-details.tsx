'use client'

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import {
    BarChart,
    Bar,
    Cell,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

import { HomeIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons"

import { useTheme } from 'next-themes';

interface CategoryDetailsProps {
    categoryName: string;
}

const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
]

export function CategoryDetails({ categoryName }: CategoryDetailsProps) {

    const { theme: mode } = useTheme()

    return (
        <Card >
            <CardHeader>
                <CardTitle className="text-xs font-bold text-muted-foreground">
                    {categoryName}
                </CardTitle>

            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex items-start space-x-4">
                        <div className="flex flex-col self-end">
                            <div className="text-2xl font-bold tracking-tighter">$ 71,829.00</div>
                            <div className="text-xs font-medium text-muted-foreground tracking-tighter">
                                49% mas que el mes pasado 
                            </div>
                        </div> 
                     </div>   
                    <div className="col-span-2">
                        <div className="h-[90px]">
                            <ResponsiveContainer width="100%" >
                                <BarChart data={data}>
                                    <Bar
                                        dataKey="goal"
                                        fill={mode === "dark" ? "#ffffff" : "#000000"}
                                        fillOpacity={0.2}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div> 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5">
                    <div className="flex flex-col justify-end">
                       
                        <div className="text-2xl font-bold tracking-tighter">$ 71,829.00</div>
                        <div className="text-xs font-medium text-muted-foreground tracking-tighter">
                            49% mas que el mes pasado
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="h-[90px]">
                            <ResponsiveContainer width="100%">
                                <BarChart data={data}>
                                    <Bar
                                        dataKey="goal"
                                        fill="transparent"
                                        stroke={mode === "dark" ? "#ffffff" : "#d3d6d6"}
                                        strokeWidth={2}
                                        radius={[4, 4, 4, 4]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
