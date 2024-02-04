'use client'

import { useEffect, useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";


import { CategoryDetails } from "./category-details"
import { CaretUpIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { getCategories } from "@/app/actions/getCategories";
import { Bar, BarChart, CartesianGrid, Cell, ComposedChart, LabelList, Legend, Line, LineChart, RadialBar, RadialBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, TooltipProps } from "recharts";
import { ResponsiveMarimekko } from '@nivo/marimekko';

import { Badge, badgeVariants } from "@/components/ui/badge";
import { useTheme } from "next-themes";


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

interface CustomTooltipProps {
    active: boolean;
    payload: any[]; // Replace 'any' with the actual type of your payload
    label: string;
}

interface CategoriesResult {
    categories: Category[];
    sumIcp: number;
    avgDoh: number;
    // Include other properties returned by getCategories...
}


interface StarProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface ListCategoriesProps {
    filter: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {

        const actualValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payload[0].payload.icp);

        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="m-2 space-y-2">
                    <div className="grid grid-cols-1">

                        <span className="text-xs uppercase text-muted-foreground">
                            DOH
                        </span>
                        <span className="font-bold text-muted-foreground">
                            {typeof payload[0].value === 'number' ? parseInt(payload[0].value).toLocaleString() : 'N/A'}
                        </span>

                    </div>

                    <div className="grid grid-cols-1">
                        <span className="text-xs uppercase text-muted-foreground">
                            ICP
                        </span>
                        <span className="font-bold text-muted-foreground">
                            {actualValue}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

const Star = ({ x, y, width, height }: StarProps) => {
    // calculate the points of the star
    const cx = x + width / 2;
    const cy = y + height / 2;
    const r = Math.min(width, height) / 2;
    const angle = Math.PI / 5;
    const points = [];
    for (let i = 0; i < 10; i++) {
        const a = i * angle - Math.PI / 2;
        const factor = i % 2 === 0 ? 1 : 0.5;
        const px = cx + r * factor * Math.cos(a);
        const py = cy + r * factor * Math.sin(a);
        points.push(`${px},${py}`);
    }
    return <polygon points={points.join(' ')} fill="gold" stroke="orange" />;
};


export default function ListCategories({ filter = "KIMBERLY-CLARK DE MEXICO, SAB DE CV                         " }: ListCategoriesProps) {

    const [categories, setCategories] = useState<Category[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [sumIcp, setSumIcp] = useState(0);
    const [avgDoh, setAvgDoh] = useState(0);
    const { theme: mode } = useTheme();

    //TODO: fix colors 
    const MUTED_COLOR = "#d3d6d6";

    useEffect(() => {
        const fetchCategories = async () => {
            const { categories, sumIcp, avgDoh } = await getCategories(filter) as CategoriesResult;
            setCategories(categories);
            // You can set the sum of icp and the average of doh to state variables here
            // For example:
            //setSumIcp(sumIcp);
            setAvgDoh(avgDoh);
        };

        fetchCategories();
    }, [filter]);

    const totalValue = categories.reduce((total, category) => total + (category.icp || 0), 0);

    const data = categories.map(item => ({
        ...item,
        id: item.category,
        value: item.icp ? (item.icp / totalValue) * 100 : 0, // calculate percentage
        avgDoh: item.doh
    }));


    return (
        <Card>
            <CardHeader className="pb-5">
                <CardTitle className="text-xs font-bold text-muted-foreground">
                    Inventario
                </CardTitle>
            </CardHeader>
            <CardContent>

                <div className="h-[250px]">

                    {/* <ResponsiveMarimekko
                        data={data}
                        id="id"
                        value="value"
                        dimensions={[{ id: 'avgDoh', value: 'avgDoh' }]}

                        layout="horizontal"
                        offset="diverging"
                        innerPadding={3}
                        axisTop={null}
                        
                        enableGridY={false}
                        margin={{ top: 10, right: 20, bottom: 60, left: 20 }}

                        colors={ () => 'rgba(136, 136, 136, 0.2)' }
                        borderColor={{ theme: 'background' }}

                        axisBottom={{
                            tickSize: 0,
                            tickPadding: 2,
                            tickRotation: 0,
                            legend: 'doh',
                            legendPosition: 'middle',
                            legendOffset: 30, 
                            renderTick: (tick) => {
                                return (
                                    <g transform={`translate(${tick.x},${tick.y})`}>
                                        <text
                                            x={0}
                                            y={0}
                                            dy={16}
                                            textAnchor="middle"

                                            style={{
                                                fontSize: 10,
                                                fontFamily: 'sans-serif',
                                                fill: 'rgba(136, 136, 136, 0.5)'
                                            }}
                                            
                                            transform="rotate(0)"
                                        >
                                            {tick.value}
                                        </text>
                                    </g>
                                );
                            }
                        }}
                        
                    /> */}

                    <ResponsiveContainer width="100%" height="100%" minHeight="100%">
                        <BarChart layout='vertical' data={categories} barSize={50} >
                            <XAxis type="number" dataKey="doh" hide={true} className='fill-border text-xs' opacity="0.5" />
                            <YAxis type="category" dataKey="category" hide={true} />


                            <Bar
                                stackId="a"
                                dataKey="doh"
                                className="fill-border-foreground opacity-75"
                                radius={[8, 8, 8, 8]}
                            >

                                {
                                    categories.map((entry, index) => (
                                        <Cell
                                            cursor="pointer"
                                            fill={entry.doh && entry.doh < 10 ? '#db9595' : index === activeIndex ? '#23D7FF' : MUTED_COLOR} // change color based on doh value
                                            key={`cell-${index}`}
                                            onMouseOver={() => setActiveIndex(index)}
                                            onMouseOut={() => setActiveIndex(null)}
                                        />
                                    ))
                                }
                                <LabelList
                                    dataKey="category"
                                    position="insideLeft"
                                    offset={5}
                                    className="text-xs font-bold fill-muted-foreground tracking-tighter"
                                />
                                <LabelList
                                    dataKey="doh"
                                    position="right"
                                    offset={10}
                                    formatter={(value: number) => `${Math.round(value)}`}
                                    className="text-xs font-bold fill-muted-foreground tracking-tighter"
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>


                </div>

                <div className="mt-2">
                    <div className="text-2xl font-bold tracking-tighter">{Math.round(avgDoh)} días</div>
                    <div className="text-xs font-medium text-muted-foreground tracking-tighter">
                        1 categoria en riesgo
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


