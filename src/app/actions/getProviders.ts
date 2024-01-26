'use server'

import prisma from '@/app/utils/connect';

export const getProviders = async () => {
    const performances = await prisma.performance.findMany({
        select: {
            provider: true, // only select the 'provider' column
        },
    });

    // Extract the 'provider' values and remove duplicates
    //const providers = [...new Set(performances.map(performance => performance.provider))];
    const providers = performances.map(performance => performance.provider);
    return providers;
}