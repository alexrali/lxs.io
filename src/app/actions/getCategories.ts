"use server";

import prisma from '@/app/utils/connect';

export const getCategories = async ( filter: string ) => {
    
    console.log(`Filter: ${filter}`);

    const categories = await prisma.performance.findMany({
        where:{
            provider: {
                contains: filter,
            },
        }, 
        orderBy: {
            icp: 'desc',
        },
    });

    console.log(`Categories: ${categories.length}`); // log the number of categories returned

    if (!Array.isArray(categories)) {
        console.error('No categories found');
        return;
    }

    const processedCategories = categories.map((category: any)  => ({
        ...category,
        ytd_cy: category.ytd_cy ? Number(category.ytd_cy) : null,
        ytd_ly: category.ytd_ly ? Number(category.ytd_ly) : null,
        mtd_cy: category.mtd_cy ? Number(category.mtd_cy) : null,
        mtd_ly: category.mtd_ly ? Number(category.mtd_ly) : null,
        percent_ytd: category.percent_ytd ? Number(category.percent_ytd) : null,
        percent_mtd: category.percent_mtd ? Number(category.percent_mtd) : null,
        icp: category.icp ? Number(category.icp) : null,
        cogs: category.cogs ? Number(category.cogs) : null,
        doh: category.doh ? Number(category.doh) : null,
    }));
    
        // Calculate the sum of icp and the average of doh
        const aggregateResults = await prisma.performance.aggregate({
            where: {
                provider: {
                    contains: filter,
                },
            },
            _sum: {
                icp: true,
                ytd_cy: true,
                ytd_ly: true,
                mtd_ly: true,
                mtd_cy: true,
            },
            _avg: {
                doh: true,
            },
        });
        
        // Convert the sum of icp to a float and the average of doh to an integer
        const sumIcp = aggregateResults._sum.icp ? Number(aggregateResults._sum.icp) : 0;
        const avgDoh = aggregateResults._avg.doh ? (parseInt(aggregateResults._avg.doh) || 0) : 0;
                
        // Get the sum of ytd_cy, ytd_ly, mtd_ly, and mtd_cy
        const sumYtdCy = aggregateResults._sum.ytd_cy ? Number(aggregateResults._sum.ytd_cy) : 0;
        const sumYtdLy = aggregateResults._sum.ytd_ly ? Number(aggregateResults._sum.ytd_ly): 0;
        const sumMtdLy = aggregateResults._sum.mtd_ly ? Number(aggregateResults._sum.mtd_ly): 0;
        const sumMtdCy = aggregateResults._sum.mtd_cy ? Number(aggregateResults._sum.mtd_cy) : 0;
        
        const percentageDifference = ((sumMtdCy - sumMtdLy) / sumMtdLy) * 100;
        const pctDif = percentageDifference ? Number(percentageDifference.toFixed(2)) : 0;
        
        console.log(`Sum of ICP: ${aggregateResults._sum.icp}`);
        console.log(`Average of DOH: ${aggregateResults._avg.doh}`);
        console.log(`Sum of YTD_CY: ${aggregateResults._sum.ytd_cy}`);
        console.log(`Sum of YTD_LY: ${aggregateResults._sum.ytd_ly}`);
        console.log(`Sum of MTD_LY: ${aggregateResults._sum.mtd_ly}`);
        console.log(`Sum of MTD_CY: ${aggregateResults._sum.mtd_cy}`);


        
        return {
            categories: processedCategories,
            sumIcp: sumIcp,
            avgDoh: avgDoh,
            sumYtdCy: sumYtdCy,
            sumYtdLy: sumYtdLy,
            sumMtdLy: sumMtdLy,
            sumMtdCy: sumMtdCy,
            pctDif: pctDif,
        };
}