
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ResponsivePie } from '@nivo/pie'
import { useTheme } from 'next-themes'

const data =
    [
        {
            "id": "HIGI",
            "label": "stylus",
            "value": 274,
            "color": "hsl(214.3, 31.8%, 91.4%)"
        },
        {
            "id": "SETO",
            "label": "lisp",
            "value": 512,
            "color": "hsl(214.3, 31.8%, 91.4%)"
        },
        {
            "id": "PAÑA",
            "label": "css",
            "value": 302,

        },
        {
            "id": "JATO",
            "label": "java",
            "value": 575,
            "color": "hsl(214.3, 31.8%, 91.4%)"
        },
        {
            "id": "SERV",
            "label": "python",
            "value": 491,
            "color": "hsl(214.3, 31.8%, 91.4%)"
        }
    ]

export default function CategoryRadial() {

    const { theme: mode } = useTheme()

    return (
        <Card>
            <CardHeader className="pb-4">
                <CardTitle className="text-xs font-bold  text-muted-foreground">
                    Categorias
                </CardTitle>
                {/* <CardDescription>
                    Your exercise minutes are ahead of where you normally are.
                </CardDescription> */}
            </CardHeader>
            <CardContent className="pb-4">
                <div className="h-[230px]">
                    <ResponsivePie
                        data={data}
                        margin={{ top: 20, right: 5, bottom: 20, left: 5 }}
                        innerRadius={0.6}
                        padAngle={0.7}
                        cornerRadius={2}
                        activeOuterRadiusOffset={8}
                        colors={{ scheme: 'blues' }}
                        borderWidth={1}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    0.2
                                ]
                            ]
                        }}
                        arcLinkLabelsSkipAngle={10}
                        arcLinkLabelsTextColor={mode === "dark" ? "#ffffff" : "#333333"}
                        arcLinkLabelsThickness={2}
                        arcLinkLabelsColor={{ from: 'color' }}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    mode === "dark" ? 4 : 2
                                ]
                            ]
                        }}

                        tooltip={({ datum }) => (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col">
                                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                                            id
                                        </span>
                                        <span className="font-bold text-muted-foreground">
                                            {datum.id}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                                            value
                                        </span>
                                        <span className="font-bold">
                                            {datum.value}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                    // legends={[
                    //     {
                    //         anchor: 'bottom',
                    //         direction: 'row',
                    //         justify: false,
                    //         translateX: 0,
                    //         translateY: 56,
                    //         itemsSpacing: 0,
                    //         itemWidth: 100,
                    //         itemHeight: 18,
                    //         itemTextColor: mode === "dark" ? '#333333' : '#333333',
                    //         itemDirection: 'left-to-right',
                    //         itemOpacity: 1,
                    //         symbolSize: 18,
                    //         symbolShape: 'circle',
                    //         effects: [
                    //             {
                    //                 on: 'hover',
                    //                 style: {
                    //                     itemTextColor: mode === "dark" ? '#333333' : '#333333'
                    //                 }
                    //             }
                    //         ]
                    //     }
                    // ]}
                    />
                </div>
            </CardContent>
        </Card>
    )
}