'use client'

import React, { useEffect, useState } from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card';

interface ClusterItem {
    client_id: string;
    cluster_id: string;
    frequency: number;
    monetary_value: number;
}

export function SimpleLineChart() {

    const [isLoading, setIsLoading] = useState(true);

    // const [clusters, setClusters] = useState<ClusterItem[]>([]);

    // useEffect(() => {
    //     fetch('/api')
    //         .then(response => response.json())
    //         .then(data => {
    //             setClusters(data.clusters);
    //             setIsLoading(false);

    //         })
    //         .catch(error => {
    //             console.log('There was a problem with the fetch operation: ' + error.message);
    //         });
    // }, []);

    const colors = ["#adfa1d", "#ffa500", "#8a2be2", "#1e90ff", "#ff69b4"];

    const generateScatterComponents = (clusters: { [key: string]: ClusterItem[] }, colors: string[]) => {
        return Object.entries(clusters).map(([clusterId, clusterGroup], index) => (
            <Scatter
                key={index}
                name={`Cluster ${clusterId}`}
                data={clusterGroup}
                fill={colors[index % colors.length]}
                isAnimationActive={true}
                animationBegin={0}
                animationDuration={1000}
                fillOpacity={0.25}
                lineType='joint'
            />
        ));
    };

    return (
      <>
        {isLoading ? (
          <div
              className="animate-pulse bg-muted  rounded-lg p-4 h-[400px] w-full"></div>
        ) : (
        <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Clientes</CardTitle>
        </CardHeader>
        <CardContent>   
          {/* <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis
              type="number"
              dataKey="frequency"
              name=""
              stroke="#d3d3d3"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              type="number"
              dataKey="monetary_value"
              name=""
              stroke="#d3d3d3"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <YAxis
              type="number"
              dataKey="monetary_value"
              name=""
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
                {
                    generateScatterComponents(clusters, colors)
                }
          </ScatterChart>
          </ResponsiveContainer> */}
              
        </CardContent>
      </Card>
      )}
      </>
    );
}
    
