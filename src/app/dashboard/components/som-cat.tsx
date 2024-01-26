import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { ResponsiveAreaBump } from '@nivo/bump'


const data = [
    {
        "id": "JavaScript",
        "data": [
            {
                "x": 2000,
                "y": 13
            },
            {
                "x": 2001,
                "y": 14
            },
            {
                "x": 2002,
                "y": 10
            },
            {
                "x": 2003,
                "y": 13
            },
            {
                "x": 2004,
                "y": 28
            },
            {
                "x": 2005,
                "y": 13
            }
        ]
    },
    {
        "id": "ReasonML",
        "data": [
            {
                "x": 2000,
                "y": 21
            },
            {
                "x": 2001,
                "y": 15
            },
            {
                "x": 2002,
                "y": 27
            },
            {
                "x": 2003,
                "y": 20
            },
            {
                "x": 2004,
                "y": 12
            },
            {
                "x": 2005,
                "y": 11
            }
        ]
    },
    {
        "id": "TypeScript",
        "data": [
            {
                "x": 2000,
                "y": 11
            },
            {
                "x": 2001,
                "y": 21
            },
            {
                "x": 2002,
                "y": 17
            },
            {
                "x": 2003,
                "y": 17
            },
            {
                "x": 2004,
                "y": 24
            },
            {
                "x": 2005,
                "y": 16
            }
        ]
    },
    {
        "id": "Elm",
        "data": [
            {
                "x": 2000,
                "y": 30
            },
            {
                "x": 2001,
                "y": 25
            },
            {
                "x": 2002,
                "y": 26
            },
            {
                "x": 2003,
                "y": 20
            },
            {
                "x": 2004,
                "y": 29
            },
            {
                "x": 2005,
                "y": 30
            }
        ]
    },
    {
        "id": "CoffeeScript",
        "data": [
            {
                "x": 2000,
                "y": 24
            },
            {
                "x": 2001,
                "y": 11
            },
            {
                "x": 2002,
                "y": 28
            },
            {
                "x": 2003,
                "y": 17
            },
            {
                "x": 2004,
                "y": 11
            },
            {
                "x": 2005,
                "y": 20
            }
        ]
    }
]

export default function MyResponsiveAreaBump() {
    return (

        <Card>
            <CardHeader className="pb-4">
                <CardTitle>Participacion de Mercado</CardTitle>
                <CardDescription>
                    Your exercise minutes are ahead of where you normally are.
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
                <div className="h-[350px]">
                    {/* <ResponsiveAreaBump
                        data={data}
                        margin={{ top: 30, right: 80, bottom: 30, left: 80 }}
                        spacing={8}
                        colors={{ scheme: 'set1' }}
                        blendMode="multiply"
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'CoffeeScript'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'TypeScript'
                                },
                                id: 'lines'
                            }
                        ]}

                         startLabel="id"
                         endLabel="id"
                        startLabel={datum => datum.id}
                        endLabel={datum => datum.id}

                        axisTop={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendPosition: 'middle',
                            legendOffset: -36
                        }}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                    />*/}
                </div>
            </CardContent>
        </Card>
    )
}