'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card"
import { useEffect, useState } from "react";
import { getSaleswowData } from "@/app/actions/getWeekSales";

// const data = [
//   {
//     average: 400,
//     today: 240,
//   },
//   {
//     average: 300,
//     today: 139,
//   },
//   {
//     average: 200,
//     today: 980,
//   },
//   {
//     average: 278,
//     today: 390,
//   },
//   {
//     average: 189,
//     today: 480,
//   },
//   {
//     average: 239,
//     today: 380,
//   },
//   {
//     average: 349,
//     today: 430,
//   },
//   {
//     average: 278,
//     today: 390,
//   },
//   {
//     average: 20,
//     today: 80,
//   },
//   {
//     average: 500,
//     today: 30,
//   },
//   {
//     average: 149,
//     today: 410,
//   },
// ]

interface CardsMetricProps {
  filter?: string
}


interface SaleswowData {
  week: number;
  provider: string;
  sale_cy: number;
  sale_ly: number;
}

export function CardsMetric({ filter = "KIMBERLY-CLARK DE MEXICO, SAB DE CV                         " }: CardsMetricProps) {


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
    <Card>
      <CardHeader className="pb-4">
        <CardTitle>Desempeño de Cuenta</CardTitle>
        <CardDescription>
          Your exercise minutes are ahead of where you normally are.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
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
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Average
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Today
                            </span>
                            <span className="font-bold">
                              {payload[1].value}
                            </span>
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
                    opacity: 0.25,
                  } as React.CSSProperties
                }
              />
              <Line
                type="monotone"
                dataKey="sale_cy"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                  style: { fill: "#adfa1d", opacity: 1 },
                }}
                style={
                  {
                    stroke: "#adfa1d",
                    opacity: 1.25,
                  } as React.CSSProperties
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

