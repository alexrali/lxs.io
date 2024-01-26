import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { ResponsiveTreeMap } from '@nivo/treemap'


const data =
{
    "name": "nivo",
    "color": "hsl(303, 70%, 50%)",
    "children": [
        {
            "name": "viz",
            "color": "hsl(114, 70%, 50%)",
            "children": [
                {
                    "name": "stack",
                    "color": "hsl(95, 70%, 50%)",
                    "children": [
                        {
                            "name": "cchart",
                            "color": "hsl(54, 70%, 50%)",
                            "loc": 182515
                        },
                        {
                            "name": "xAxis",
                            "color": "hsl(257, 70%, 50%)",
                            "loc": 52216
                        },
                        {
                            "name": "yAxis",
                            "color": "hsl(91, 70%, 50%)",
                            "loc": 80268
                        },
                        {
                            "name": "layers",
                            "color": "hsl(281, 70%, 50%)",
                            "loc": 120266
                        }
                    ]
                },
                {
                    "name": "ppie",
                    "color": "hsl(290, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(240, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pie",
                                    "color": "hsl(281, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "outline",
                                            "color": "hsl(322, 70%, 50%)",
                                            "loc": 143295
                                        },
                                        {
                                            "name": "slices",
                                            "color": "hsl(241, 70%, 50%)",
                                            "loc": 169
                                        },
                                        {
                                            "name": "bbox",
                                            "color": "hsl(168, 70%, 50%)",
                                            "loc": 71581
                                        }
                                    ]
                                },
                                {
                                    "name": "donut",
                                    "color": "hsl(93, 70%, 50%)",
                                    "loc": 135761
                                },
                                {
                                    "name": "gauge",
                                    "color": "hsl(37, 70%, 50%)",
                                    "loc": 100150
                                }
                            ]
                        },
                        {
                            "name": "legends",
                            "color": "hsl(336, 70%, 50%)",
                            "loc": 103714
                        }
                    ]
                }
            ]
        },
        {
            "name": "colors",
            "color": "hsl(134, 70%, 50%)",
            "children": [
                {
                    "name": "rgb",
                    "color": "hsl(190, 70%, 50%)",
                    "loc": 196214
                },
                {
                    "name": "hsl",
                    "color": "hsl(161, 70%, 50%)",
                    "loc": 49222
                }
            ]
        },
        {
            "name": "utils",
            "color": "hsl(164, 70%, 50%)",
            "children": [
                {
                    "name": "randomize",
                    "color": "hsl(101, 70%, 50%)",
                    "loc": 89776
                },
                {
                    "name": "resetClock",
                    "color": "hsl(133, 70%, 50%)",
                    "loc": 56099
                },
                {
                    "name": "noop",
                    "color": "hsl(42, 70%, 50%)",
                    "loc": 163789
                },
                {
                    "name": "tick",
                    "color": "hsl(55, 70%, 50%)",
                    "loc": 75222
                },
                {
                    "name": "forceGC",
                    "color": "hsl(182, 70%, 50%)",
                    "loc": 148823
                },
                {
                    "name": "stackTrace",
                    "color": "hsl(46, 70%, 50%)",
                    "loc": 30275
                },
                {
                    "name": "dbg",
                    "color": "hsl(345, 70%, 50%)",
                    "loc": 155649
                }
            ]
        },
        {
            "name": "generators",
            "color": "hsl(178, 70%, 50%)",
            "children": [
                {
                    "name": "address",
                    "color": "hsl(273, 70%, 50%)",
                    "loc": 57945
                },
                {
                    "name": "city",
                    "color": "hsl(294, 70%, 50%)",
                    "loc": 49653
                },
                {
                    "name": "animal",
                    "color": "hsl(159, 70%, 50%)",
                    "loc": 199793
                },
                {
                    "name": "movie",
                    "color": "hsl(76, 70%, 50%)",
                    "loc": 99046
                },
                {
                    "name": "user",
                    "color": "hsl(349, 70%, 50%)",
                    "loc": 59106
                }
            ]
        },
        {
            "name": "set",
            "color": "hsl(55, 70%, 50%)",
            "children": [
                {
                    "name": "clone",
                    "color": "hsl(186, 70%, 50%)",
                    "loc": 19892
                },
                {
                    "name": "intersect",
                    "color": "hsl(351, 70%, 50%)",
                    "loc": 19124
                },
                {
                    "name": "merge",
                    "color": "hsl(312, 70%, 50%)",
                    "loc": 75559
                },
                {
                    "name": "reverse",
                    "color": "hsl(341, 70%, 50%)",
                    "loc": 114082
                },
                {
                    "name": "toArray",
                    "color": "hsl(176, 70%, 50%)",
                    "loc": 105683
                },
                {
                    "name": "toObject",
                    "color": "hsl(346, 70%, 50%)",
                    "loc": 164496
                },
                {
                    "name": "fromCSV",
                    "color": "hsl(180, 70%, 50%)",
                    "loc": 145899
                },
                {
                    "name": "slice",
                    "color": "hsl(184, 70%, 50%)",
                    "loc": 126359
                },
                {
                    "name": "append",
                    "color": "hsl(293, 70%, 50%)",
                    "loc": 195663
                },
                {
                    "name": "prepend",
                    "color": "hsl(195, 70%, 50%)",
                    "loc": 181493
                },
                {
                    "name": "shuffle",
                    "color": "hsl(21, 70%, 50%)",
                    "loc": 56682
                },
                {
                    "name": "pick",
                    "color": "hsl(291, 70%, 50%)",
                    "loc": 195394
                },
                {
                    "name": "plouc",
                    "color": "hsl(189, 70%, 50%)",
                    "loc": 118995
                }
            ]
        },
        {
            "name": "text",
            "color": "hsl(13, 70%, 50%)",
            "children": [
                {
                    "name": "trim",
                    "color": "hsl(334, 70%, 50%)",
                    "loc": 118550
                },
                {
                    "name": "slugify",
                    "color": "hsl(196, 70%, 50%)",
                    "loc": 55138
                },
                {
                    "name": "snakeCase",
                    "color": "hsl(337, 70%, 50%)",
                    "loc": 186622
                },
                {
                    "name": "camelCase",
                    "color": "hsl(334, 70%, 50%)",
                    "loc": 99351
                },
                {
                    "name": "repeat",
                    "color": "hsl(169, 70%, 50%)",
                    "loc": 156990
                },
                {
                    "name": "padLeft",
                    "color": "hsl(266, 70%, 50%)",
                    "loc": 77175
                },
                {
                    "name": "padRight",
                    "color": "hsl(4, 70%, 50%)",
                    "loc": 130923
                },
                {
                    "name": "sanitize",
                    "color": "hsl(105, 70%, 50%)",
                    "loc": 2619
                },
                {
                    "name": "ploucify",
                    "color": "hsl(181, 70%, 50%)",
                    "loc": 144345
                }
            ]
        },
        {
            "name": "misc",
            "color": "hsl(235, 70%, 50%)",
            "children": [
                {
                    "name": "greetings",
                    "color": "hsl(332, 70%, 50%)",
                    "children": [
                        {
                            "name": "hey",
                            "color": "hsl(232, 70%, 50%)",
                            "loc": 134898
                        },
                        {
                            "name": "HOWDY",
                            "color": "hsl(41, 70%, 50%)",
                            "loc": 15639
                        },
                        {
                            "name": "aloha",
                            "color": "hsl(170, 70%, 50%)",
                            "loc": 91050
                        },
                        {
                            "name": "AHOY",
                            "color": "hsl(145, 70%, 50%)",
                            "loc": 145335
                        }
                    ]
                },
                {
                    "name": "other",
                    "color": "hsl(212, 70%, 50%)",
                    "loc": 156098
                },
                {
                    "name": "path",
                    "color": "hsl(211, 70%, 50%)",
                    "children": [
                        {
                            "name": "pathA",
                            "color": "hsl(178, 70%, 50%)",
                            "loc": 119494
                        },
                        {
                            "name": "pathB",
                            "color": "hsl(300, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathB1",
                                    "color": "hsl(37, 70%, 50%)",
                                    "loc": 180088
                                },
                                {
                                    "name": "pathB2",
                                    "color": "hsl(149, 70%, 50%)",
                                    "loc": 10228
                                },
                                {
                                    "name": "pathB3",
                                    "color": "hsl(227, 70%, 50%)",
                                    "loc": 33485
                                },
                                {
                                    "name": "pathB4",
                                    "color": "hsl(128, 70%, 50%)",
                                    "loc": 179828
                                }
                            ]
                        },
                        {
                            "name": "pathC",
                            "color": "hsl(44, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathC1",
                                    "color": "hsl(283, 70%, 50%)",
                                    "loc": 26199
                                },
                                {
                                    "name": "pathC2",
                                    "color": "hsl(54, 70%, 50%)",
                                    "loc": 67071
                                },
                                {
                                    "name": "pathC3",
                                    "color": "hsl(221, 70%, 50%)",
                                    "loc": 72790
                                },
                                {
                                    "name": "pathC4",
                                    "color": "hsl(300, 70%, 50%)",
                                    "loc": 82418
                                },
                                {
                                    "name": "pathC5",
                                    "color": "hsl(207, 70%, 50%)",
                                    "loc": 44360
                                },
                                {
                                    "name": "pathC6",
                                    "color": "hsl(93, 70%, 50%)",
                                    "loc": 53899
                                },
                                {
                                    "name": "pathC7",
                                    "color": "hsl(88, 70%, 50%)",
                                    "loc": 57585
                                },
                                {
                                    "name": "pathC8",
                                    "color": "hsl(295, 70%, 50%)",
                                    "loc": 71679
                                },
                                {
                                    "name": "pathC9",
                                    "color": "hsl(338, 70%, 50%)",
                                    "loc": 90792
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}


export default function CategoryShare() {
    return (
        <Card>
            <CardHeader className="pb-4">
                <CardTitle>Participacion de Categorias</CardTitle>
                <CardDescription>
                    Your exercise minutes are ahead of where you normally are.
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
                <div className="h-[350px]">
                    {/* <ResponsiveTreeMap
                        data={data}
                        identity="name"
                        value="loc"
                        valueFormat=".02s"
                        // tile="binary"
                        margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                        labelSkipSize={12}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.2
                                ]
                            ]
                        }}
                        parentLabelPosition="top"
                        parentLabelTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    2
                                ]
                            ]
                        }}
                        colors={{ scheme: 'set1'}}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    0.1
                                ]
                            ]
                        }}
                    /> */}
                </div>
            </CardContent>
        </Card>
    )
}