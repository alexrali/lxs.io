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
import { Bar, BarChart, CartesianGrid, Cell, ComposedChart, LabelList, Legend, Line, LineChart, RadialBar, RadialBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
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

interface ListCategoriesProps {
    filter: string;
}

const CustomTooltip = ({ active, payload, label }) => {
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

const Star = ({ x, y, width, height }) => {
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
    const [activeIndex, setActiveIndex] = useState(null);
    const [sumIcp, setSumIcp] = useState(0);
    const [avgDoh, setAvgDoh] = useState(0);
    const { theme: mode } = useTheme();

    //TODO: fix colors 
    const MUTED_COLOR = "#d3d6d6";

    useEffect(() => {
        const fetchCategories = async () => {
            const { categories, sumIcp, avgDoh } = await getCategories(filter);
            setCategories(categories);
            // You can set the sum of icp and the average of doh to state variables here
            // For example:
            //setSumIcp(sumIcp);
            setAvgDoh(avgDoh);
        };

        fetchCategories();
    }, [filter]);


    return (
        <Card>
            <CardHeader className="pb-5">
                <CardTitle className="text-xs font-bold text-muted-foreground">
                    Inventario
                </CardTitle>
            </CardHeader>
            <CardContent>

                <div className="flex-1 text-left">
                    <div className="text-3xl font-bold tracking-tighter">{avgDoh} días</div>
                    <div className="text-xs font-medium text-muted-foreground tracking-tighter">
                        1 categoria en riesgo
                    </div>
                </div>

                <div className="h-[270px] mt-4">
                    <ResponsiveContainer width="100%" height="100%" minHeight="100%">
                        <BarChart layout='vertical' data={categories} barSize={100} >
                            <XAxis type="number" dataKey="doh" hide={true} className='fill-border text-xs' opacity="0.5" />
                            <YAxis type="category" dataKey="category" hide={true} />
                            {/* <Tooltip content={<CustomTooltip />} cursor={
                                {
                                    fill: '#d3d6d6',
                                    stroke: '#d3d6d6',
                                    opacity: 0.5,
                                    radius: 10,
                                }
                            } /> */}
                            <Bar
                                stackId="a"
                                dataKey="doh"
                                fill="#d3d6d6" // muted color
                                stroke={mode === "dark" ? "#ffffff" : "#d3d6d6"}
                                strokeOpacity={0.1}
                                //opacity="0.25"
                                strokeWidth={2}
                                radius={[8, 8, 8, 8]}
                            >
                                {
                                    categories.map((entry, index) => (
                                        <Cell
                                            cursor="pointer"
                                            fill={entry.doh < 10 ? '#db9595' : index === activeIndex ? '#23D7FF' : MUTED_COLOR} // change color based on doh value
                                            key={`cell-${index}`}
                                            //opacity={index === activeIndex ? 1 : 0.25}
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
                                    formatter={(value) => `${Math.round(value)}`}
                                    className="text-xs font-bold fill-muted-foreground tracking-tighter"
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}


