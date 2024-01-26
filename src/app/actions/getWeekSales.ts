'use server'

import prisma from '@/app/utils/connect';

export const getSaleswowData = async (filter: string) => {

    console.log(`Filter: ${filter}`);

    try {
        const data = await prisma.saleswow.findMany({
            where:{
                provider: {
                    contains: filter,
                },
            }
        });

        console.log(`Saleswow Data: ${data.length}`); // log the number of categories returned

        const processedSaleswow = data.map((sales: any)  => ({
            ...sales,
            week: sales.week,
            provider: sales.provider,
            sale_cy: Number(sales.sale_cy) || null,
            sale_ly: sales.sale_ly !== 0 && sales.sale_ly ? Number(sales.sale_ly) : null,
        }));

        return processedSaleswow;

    } catch (error) {
        console.error(error);
        throw error;
    }
}