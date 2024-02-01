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
import { useTheme } from 'next-themes';

interface providerEntryProps {
    filter: string;
}


const data = [
    {
        goal: 400,
        goal_ly: 100,
    },
    {
        goal: 300,
        goal_ly: 20,
    },
    {
        goal: 200,
        goal_ly: 30,
    },
    {
        goal: 300,
        goal_ly: 40,
    },
    {
        goal: 200,
        goal_ly: 50,
    },
    {
        goal: 278,
        goal_ly: 120,
    },
    {
        goal: 189,
        goal_ly: 50,
    },
    {
        goal: 239,
        goal_ly: 60,
    },
    {
        goal: 300,
        goal_ly: 400,
    },
    {
        goal: 200,
        goal_ly: 300,
    },
    {
        goal: 278,
        goal_ly: 220,
    },
    {
        goal: 189,
        goal_ly: 210,
    },

]

export default function ProviderEntry({ filter = "KIMBERLY-CLARK DE MEXICO, SAB DE CV                         " }: providerEntryProps) {

    const { theme: mode } = useTheme()

    return (
        <Card >
            <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tighter">{filter}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[120px]">
                    <ResponsiveContainer width="100%" height="100%" minHeight={0}>
                        <BarChart data={data} barSize={50} barGap={10}>
                            <Bar
                                dataKey="goal"
                                className="fill-foreground opacity-30"
                                // stroke={mode === "dark" ? "#d3d6d6" : "#d3d6d6"}
                                // strokeWidth={2}
                                radius={[6, 6, 6, 6]}
                                // stackId="a"
                            />
                            <Bar
                                dataKey="goal_ly"
                                className="fill-primary"
                                // fill={mode === "dark" ? "#ffffff" : "#d7ff00"}
                                radius={[6, 6, 6, 6]}
                                // fillOpacity={.8}
                                // stackId="a"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4">
                    {/* <p className="text-1xl">This month your stores have sold All Outlets</p> */}
                    <p className="text-3xl font-bold tracking-tighter">$ 331,224.74</p>
                    <p className="text-xs font-medium text-muted-foreground tracking-tighter">% adicional respecto al ejercicio anterior</p>
                </div>

            </CardContent>
        </Card>
    );
}