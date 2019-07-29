const tripRouter = [
    {
        path: '/trip',
        name: 'Trip',
        component: () => import('@/views/trip/trip'),
        meta: {  // 窗口的名字
            title: '出行'
        },
        children: [
            {
                path: 'map',
                name: 'Map',
                component: () => import('@/components/MapLocation/index'),
                meta: {
                    title: '地图'
                }
            }
        ]
    }
]

export default tripRouter