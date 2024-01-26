'use client'

import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import {
    Badge,
} from "@/components/ui/badge";

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
    ResponsiveContainer,
    LabelList
} from 'recharts';

import { HomeIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";

import { useTheme } from 'next-themes';
import { getCategories } from '@/app/actions/getCategories';

interface providerTargetProps {
    filter: string;
}

const data = [
    { name: 'Progress', current: 70, total: 100 },
];

interface Category {
    // date: Date;
    provider: string;
    category: string;
    ytd_cy: number | null;
    ytd_ly: number | null;
    mtd_cy: number | null;
    mtd_ly: number | null;
    percent_ytd: number | null;
    percent_mtd: number | null;
    icp: number | null;
    cogs: number | null;
    doh: number | null;
}

export default function ProviderTarget({ filter = "KIMBERLY-CLARK DE MEXICO, SAB DE CV                         " }: providerTargetProps) {

    const { theme } = useTheme();

    const [categories, setCategories] = useState<Category[]>([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [sumIcp, setSumIcp] = useState(0);
    const [avgDoh, setAvgDoh] = useState(0);
    const [sumYtdCy, setSumYtdCy] = useState(0);
    const [sumYtdLy, setSumYtdLy] = useState(0);
    const [sumMtdCy, setSumMtdCy] = useState(0);
    const [sumMtdLy, setSumMtdLy] = useState(0);
    const [pctDif, setPctDif] = useState(0);

    const { theme: mode } = useTheme();

    //TODO: fix colors 
    const MUTED_COLOR = "#d3d6d6";

    useEffect(() => {
        const fetchCategories = async () => {

            const {
                categories,
                sumIcp,
                avgDoh,
                sumYtdCy,
                sumYtdLy,
                sumMtdLy,
                sumMtdCy,
                pctDif,
            } = await getCategories(filter);
            //setCategories(categories);
            // You can set the sum of icp and the average of doh to state variables here
            // For example:
            //setSumIcp(sumIcp);
            setSumMtdCy(sumMtdCy);
            setSumMtdLy(sumMtdLy);
            setPctDif(pctDif);
            //setAvgDoh(avgDoh);
        };

        fetchCategories();
    }, [filter]);

    const data = [
        {
            name: 'MTD',
            LastYear: sumMtdLy,
            CurrentYear: sumMtdCy,
            Difference: sumMtdCy - sumMtdLy,
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xs font-bold text-muted-foreground">Objetivo Comercial 
                </CardTitle>
            </CardHeader>
            <CardContent>

                <div className="h-[60px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout='vertical' data={data}>
                            {/* <defs>
                                <pattern id="slashPattern" patternUnits="userSpaceOnUse" width={10} height={10}>
                                    <path d="M 0,0 l 10,10" stroke="gray" opacity="0.5" strokeWidth={4} />
                                </pattern>
                            </defs> */}
                            <XAxis type="number" hide={true} />
                            <YAxis type="category" dataKey="name" hide={true} />
                            <Bar dataKey="LastYear" stackId='a' className='fill-muted' radius={[20, 20, 20, 20]} >
                            <LabelList
                                dataKey="LastYear"
                                position="insideLeft"
                                offset={10}
                                formatter={(value) => { return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + ' ly' }}
                                className="text-xs font-bold fill-muted-foreground tracking-tighter"
                            />
                            </Bar >
                            <Bar dataKey="Difference" stackId='a' className='fill-primary' radius={[20, 20, 20, 20]} >
                                <LabelList
                                dataKey="Difference"
                                position="insideLeft"
                                offset={10}
                                formatter={(value) => { return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}
                                className="text-xs font-bold fill-muted-foreground tracking-tighter"
                            />
                            </Bar>

                            {/* <Bar dataKey="Difference" fill="#eee" />
                            <Bar dataKey="CurrentYear" fill="#888" /> */}

                            {/* <Tooltip ></Tooltip> */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="">
                    <div className="text-3xl font-bold tracking-tighter">
                        {/* {sumMtdCy.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                         */}
                        <CountUp start={0} end={sumMtdCy} duration={2.75} separator="," prefix="$" decimals={2} /> 
                        <span className="text-xs font-bold tracking-tighter"> mtd</span>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground tracking-tighter">
                        {pctDif}% respecto al año anterior
                        {/* <Badge variant="secondary">{pctDif}%</Badge> */}
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}