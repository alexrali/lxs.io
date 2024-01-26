// import prisma from '@/app/utils/connect';
// import { NextResponse } from 'next/server';

// export async function GET() {
//     try {
//         //todo: get the clusters from the database
//         // const clusters = await prisma.clusters.findMany();

//         // const groupedClusters = clusters.reduce((grouped: { [key: string]: typeof clusters[0][] }, cluster) => {
//         //     (grouped[cluster.cluster_id] = grouped[cluster.cluster_id] || []).push(cluster);
//         //     return grouped;
//         // }, {});

//         // return NextResponse.json({ clusters: groupedClusters });
//     } catch (error) {   
//         console.log("error getting the clusters", error);
//         return NextResponse.json({ error: 'Error getting the clusters' });
//     }
// }
