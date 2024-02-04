'use client'

import React, { useEffect, useState } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getSaleswowData } from '@/app/actions/getWeekSales';
import CountUp from 'react-countup';

interface SaleswowProps {
    filter?: string
}

interface SaleswowData {
    week: number;
    provider: string;
    sale_cy: number;
    sale_ly: number;
}


export function SalesWow({ filter = "KIMBERLY-CLARK DE MEXICO, SAB DE CV                         " }: SaleswowProps) {

    const [data, setData] = useState<SaleswowData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: SaleswowData[] = await getSaleswowData(filter);
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [filter]);


    const dataMin = Math.min(...data.map(item => item.sale_cy));
    const dataMax = Math.max(...data.map(item => item.sale_cy));
    const range = dataMax - dataMin;
    const padding = range * 0.1;

    return (

        <Card>
            <CardHeader>
                <CardTitle className="text-xs font-bold text-muted-foreground"> Registro Semanal </CardTitle>
            </CardHeader>
            <CardContent>

                <div className="h-[100px]">
                    <ResponsiveContainer width="100%">
                        <LineChart
                            data={data}
                        // margin={{
                        //     top: 5,
                        //     right: 10,
                        //     left: 10,
                        //     bottom: 0,
                        // }}
                        >
                            <YAxis hide={true} domain={[dataMin - padding, dataMax + padding]} />
                            <Tooltip
                                content={({ active, payload, label }) => {

                                    if (active && payload && payload.length) {
                                        let actualValue = 'na';
                                        if (payload.length > 1 && payload[1].value && typeof payload[1].value === 'number') {
                                            actualValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payload[1].value);
                                        }

                                        return (
                                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                <div className="grid grid-cols-1 gap-2">
                                                    <div className="flex flex-col">
                                                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Semana
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {label + 1}
                                                        </span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="flex flex-col">
                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Anterior
                                                            </span>
                                                            <span className="font-bold text-muted-foreground">
                                                                {typeof payload[0].value === 'number' ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payload[0].value) : 'N/A'}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Actual
                                                            </span>
                                                            <span className="font-bold">
                                                                {actualValue}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    return null
                                }}
                            />
                            {/* <XAxis dataKey={"week"} hide={false} interval={5}/> */}
                            <Line
                                type="monotone"
                                strokeWidth={2}
                                dataKey="sale_ly"
                                className='fill-foreground opacity-30'
                                activeDot={{
                                    r: 4,
                                    style: {
                                        fill: "#d3d6d6",
                                        opacity: 0.25
                                    },
                                }}
                                
                            />
                            <Line
                                type="monotone"
                                dataKey="sale_cy"
                                strokeWidth={2}
                                className="fill-primary"
                                activeDot={{
                                    r: 8,
                                    style: { fill: "#adfa1d", opacity: 1 },
                                }}
                                // style={
                                //     {
                                //         stroke: "#adfa1d",
                                //         opacity: 1.25,
                                //     } as React.CSSProperties
                                // }
                            />

                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* <div className="flex justify-between items-center mt-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Average Sale Value</h3>
                            <p className="text-gray-500">$7,621,310.50</p>
                            <p className="text-sm text-gray-400">$155,291.400 less than last year.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Average Items per Sale</h3>
                            <p className="text-gray-500">22.1</p>
                            <p className="text-sm text-gray-400">0.28 less than last year.</p>
                        </div>
                    </div> */}

                <div >
                    <p className="text-3xl font-bold tracking-tighter">
                        
                        <CountUp start={0} end={dataMax} duration={2.75} separator="," prefix="$" decimals={2} />
                    </p>
                    <p className="text-xs font-medium text-muted-foreground tracking-tighter">% adicional respecto al ejercicio anterior</p>
                </div>

            </CardContent>
        </Card>
    );
};

export default SalesWow;
