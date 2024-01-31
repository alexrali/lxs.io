'use client'

import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { HomeIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";

import { useTheme } from 'next-themes';

export default function CardTemplate() {

    const { theme } = useTheme();

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xs font-bold text-muted-foreground"> Objetivo </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex-1 text-left">
                    <div className="text-2xl font-bold tracking-tighter">$71,829.00</div>
                    <div className="text-xs font-medium text-muted-foreground tracking-tighter">
                        49% mas que el mes pasado
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}