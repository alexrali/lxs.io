"use client"

import { getSaleswowData } from "@/app/actions/getWeekSales";
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";

import { Bar, BarChart, CartesianAxis, CartesianGrid, Cell, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


interface CustomTooltipProps {
  active: boolean;
  payload: any[]; // Replace 'any' with the actual type of the payload
  label: string;
}

const CustomTooltip = ({ active, payload, label } : CustomTooltipProps) => {
  if (active && payload && payload.length) {
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
                {typeof payload[1].value === 'number' ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payload[1].value) : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

interface CustomCursorProps {
  payload: any[]; // Replace 'any' with the actual type of the payload
  x: number;
  y: number;
  width: number;
  height: number;
}


const CustomCursor = ({ payload, x, y, width, height }: CustomCursorProps) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      // fill="currentColor"
      className="fill-muted opacity-70"
    />
  );
};

interface OverviewProps {
  filter?: string
}

interface SaleswowData {
  week: number;
  provider: string;
  sale_cy: number;
  sale_ly: number;
}

export function Overview({ filter = "KIMBERLY-CLARK DE MEXICO, SAB DE CV                         " }: OverviewProps) {

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

  return (

    <div className="h-[430px]">
      <div className="flex gap-4 text-left mb-10 ml-5">
        <div className="text-5xl font-bold tracking-tighter">
          $32,450.09
        </div>
        <div>
          <div>
            <label className="text-xs text-muted-foreground font-medium">Menos que la semana pasada</label>
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-medium">Mas que el mismo periodo del año anterior</label>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="30%">

        {/* <BarChart data={data} syncId="any"
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        > */}
        {/* <CartesianGrid vertical={false} className="fill-border" opacity="0.1" /> */}
        {/* <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
          <Bar dataKey="sale_ly" radius={[2, 2, 0, 0]} className="fill-border" />
          <Bar dataKey="sale_cy" radius={[2, 2, 0, 0]} className="fill-primary" />
        </BarChart> */}

        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
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
          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="sale_ly"
            activeDot={{
              r: 4,
              style: {
                fill: "#d3d6d6",
                opacity: 0.25
              },
            }}
            style={
              {
                stroke: "#d3d3d3",
                opacity: 0.5,
              } as React.CSSProperties
            }
          />
          <Line
            type="monotone"
            dataKey="sale_cy"
            strokeWidth={3}
            activeDot={{
              r: 8,
              style: { fill: "#d7ff00", opacity: 1 },
            }}
            style={
              {
                stroke: "#d7ff00",
                opacity: 1,
              } as React.CSSProperties
            }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}



{/* <ReferenceLine y={0} strokeWidth={1} fill="currentColor" className="fill-border" opacity="0.5" strokeDasharray="1 1 1"  /> */ }

{/* <XAxis 
          dataKey="name"
          stroke="currentColor"
          fontSize={10}
          tickLine={false}
          axisLine={false}
          className="stroke-destructive"
        /> */}

//  <ResponsiveContainer width="100%" height="20%" >
//         <LineChart data={data2} syncId="any"
//           margin={{
//             top: 0,
//             right: 0,
//             left: 0,
//             bottom: 35,
//           }}
//         >
//           <Tooltip
//             content={({ active, payload }) => {
//               if (active && payload && payload.length) {
//                 return (
//                   <div className="rounded-lg border bg-background p-2 shadow-sm">
//                     <div className="grid grid-cols-2 gap-2">
//                       <div className="flex flex-col">
//                         <span className="text-[0.70rem] uppercase text-muted-foreground">
//                           Average
//                         </span>
//                         <span className="font-bold text-muted-foreground">
//                           {payload[0].value}
//                         </span>
//                       </div>
//                       <div className="flex flex-col">
//                         <span className="text-[0.70rem] uppercase text-muted-foreground">
//                           Today
//                         </span>
//                         <span className="font-bold">
//                           {payload[1].value}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               }
//               return null
//             }}
//           />
//           <Line type="monotone" strokeWidth={3} dataKey="average"
//             activeDot={{
//               r: 4,
//               style: {
//                 fill: "#d3d6d6",
//                 opacity: 0.25
//               },
//             }}
//             dot={false}
//             style={
//               {
//                 stroke: "#d3d3d3",
//                 opacity: 0.25,
//               } as React.CSSProperties
//             }
//           />
//           <Line type="bump" dataKey="today" strokeWidth={3} fill="currentColor" className="fill-primary"
//             activeDot={{
//               r: 4,
//               //   style: { fill: "#adfa1d", opacity: 1 },
//             }}
//             dot={false}
//           // style={
//           //   {
//           //     stroke: "#adfa1d",
//           //     opacity: 1.25,
//           //   } as React.CSSProperties
//           // }
//           />
//         </LineChart>
//       </ResponsiveContainer>  


