import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// import { ResponsiveMarimekko } from '@nivo/marimekko'
import { useTheme } from 'next-themes'


const data = [
    {
        "statement": "HIGI",
        "participation": 35,
        "autoservicio": 45,
        "distribucion": 55
    },
    {
        "statement": "PAÑA",
        "participation": 35,
        "autoservicio": 65,
        "distribucion": 35
    },
    {
        "statement": "SERV",
        "participation": 18,
        "autoservicio": 30,
        "distribucion": 70
    },
    {
        "statement": "TOHU",
        "participation": 5,
        "autoservicio": 90,
        "distribucion": 10
    },
    {
        "statement": "SETO",
        "participation": 3,
        "autoservicio": 10,
        "distribucion": 90
    },
    {
        "statement": "JATO",
        "participation": 1,
        "autoservicio": 1,
        "distribucion": 99
    },
    {
        "statement": "TOFE",
        "participation": 1,
        "autoservicio": 99,
        "distribucion": 1
    },
    {
        "statement": "PANT",
        "participation": 0.5,
        "autoservicio": 99,
        "distribucion": 1
    },
    {
        "statement": "PAÑU",
        "participation": 0.5,
        "autoservicio": 99,
        "distribucion": 1
    },

]

export default function CategoryChannel() {

    const { theme } = useTheme()

    return (
        <Card 
        // style={{ backgroundColor: theme === 'dark' ? '#dcdcdc' : '#fefffd' }}
        >
            <CardHeader>
                <CardTitle className="text-xs font-bold text-muted-foreground ">Channel</CardTitle>
                <CardDescription>Channel description</CardDescription>
            </CardHeader>
            <CardContent>
                {/* <div className="h-[200px]">
                    <ResponsiveMarimekko
                        data={data}
                        id="statement"
                        value="participation"
                        dimensions={[
                            {
                                id: 'autoservicio',
                                value: 'autoservicio'
                            },
                            {
                                id: 'distribucion',
                                value: 'distribucion'
                            }
                        ]}
                        offset="expand"

                        innerPadding={9}
                        axisTop={null}
                        axisRight={{
                            orient: 'right',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendOffset: 0
                        }}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'participation',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'opinions',
                            legendOffset: -40,
                            legendPosition: 'middle',

                        }}
                        margin={{ top: 5, right: 30, bottom: 80, left: 30 }}
                        colors={['#fabd4c', '#4cbaf9',]} 
                        //colors={{ scheme: 'set2' }}
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
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 80,
                                itemsSpacing: 0,
                                itemWidth: 140,
                                itemHeight: 18,
                                itemTextColor: '#999',
                                itemDirection: 'right-to-left',
                                itemOpacity: 1,
                                symbolSize: 18,
                                symbolShape: 'square',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000'
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div> */}
            </CardContent>
        </Card>
    )
}