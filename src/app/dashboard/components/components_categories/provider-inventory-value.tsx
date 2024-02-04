import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';


import { PieChart, Pie, Sector, ResponsiveContainer, Cell, Tooltip, TooltipProps, BarChart, XAxis, YAxis, Bar } from 'recharts';


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "components/ui/card"
import { useTheme } from 'next-themes';
import { getCategories } from '@/app/actions/getCategories';

const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 2}
                outerRadius={outerRadius + 12}
                fill={fill}
            />
            {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={4} fill={fill} stroke="none" />
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 4} y={ey} textAnchor={textAnchor} className="text-xs" fill="#999">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 4} y={ey} dy={12} textAnchor={textAnchor} className="text-xs" fill="#ffffff">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text> */}

            <text x={cx} y={cy} textAnchor="middle" dy='28' className="text-xs font-medium fill-foreground tracking-tighter">
                {`ICP ${value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
            </text>

            <text x={cx} y={cy} textAnchor="middle" dy='10' className="text-1xl font-bold tracking-tighter" fill={fill}>
                {`${(percent * 100).toFixed(2)}%`}
            </text>

            <text x={cx} y={cy} dy='-20' textAnchor="middle" className="text-xs font-bold fill-foreground">{payload.category}</text>
        </g>
    );
};

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


interface ProviderInventoryValueProps {
    filter: string;
}

interface CategoriesResult {
    categories: Category[];
    sumIcp: number;
    avgDoh: number;
    // Include other properties returned by getCategories...
}

export default function ProviderInventoryValue({ filter = "KIMBERLY-CLARK DE MEXICO, SAB DE CV                         " }: ProviderInventoryValueProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const MUTED_COLOR = "#999";

    const onPieEnter = (_: any, index: any) => {
        setActiveIndex(index);
    };

    const [categories, setCategories] = useState<Category[]>([]);
    const [sumIcp, setSumIcp] = useState(0);
    const [avgDoh, setAvgDoh] = useState(0);
    const { theme: mode } = useTheme();

    useEffect(() => {
        const fetchCategories = async () => {
            const { categories, sumIcp, avgDoh } = await getCategories(filter) as CategoriesResult;
            setCategories(categories);
            // You can set the sum of icp and the average of doh to state variables here
            // For example:
            setSumIcp(sumIcp);
            //setAvgDoh(avgDoh);
        };

        fetchCategories();
    }, [filter]);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xs font-bold text-muted-foreground">
                    Inventario
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={categories}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={70}
                                className='fill-border-foreground'
                                dataKey="icp"
                                paddingAngle={1}
                                onMouseEnter={onPieEnter}
                                cursor="pointer"
                            >
                                {categories.map((entry, index) => (
                                    <Cell

                                        key={`cell-${index}`}
                                        fill={index === activeIndex ? "#23D7FF" : MUTED_COLOR}
                                        opacity={index === activeIndex ? 1 : 0.25}
                                    />
                                ))}
                            </Pie>

                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='mt-2' >
                    <p className="text-2xl font-bold tracking-tighter">
                        <CountUp start={0} end={sumIcp} duration={2.75} separator="," prefix="$" decimals={2} />
                    </p>
                    <p className="text-xs font-medium text-muted-foreground tracking-tighter">% adicional respecto</p>
                </div>

            </CardContent>
        </Card>
    );
}

