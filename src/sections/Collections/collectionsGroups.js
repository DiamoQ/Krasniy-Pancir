import categoryItems from "@/sections/Categories/categoryitems";

const collectionsGroups = [
    {
        isActive: true,
        title: 'Movies',
        groups: [
            {
                title: 'Our Genres',
                items: categoryItems,
            },
            {
                title: 'Popular Top 10 In Genres',
                items: [
                    {
                        title: "Action",
                        badge: 'Top 10 In',
                        images: [
                                    '/src/assets/images/categories/action/1.png',
                                    '/src/assets/images/categories/action/2.png',
                                    '/src/assets/images/categories/action/3.png',
                                    '/src/assets/images/categories/action/4.png',
                        ],
                    },
                    {
                        title: "Adventure",
                        badge: 'Top 10 In',
                        images: [
                                    '/src/assets/images/categories/adventure/1.png',
                                    '/src/assets/images/categories/adventure/2.png',
                                    '/src/assets/images/categories/adventure/3.png',
                                    '/src/assets/images/categories/adventure/4.png',
                        ],
                    },
                    {
                        title: "Comedy",
                        badge: 'Top 10 In',
                        images: [
                                    '/src/assets/images/categories/comedy/1.png',
                                    '/src/assets/images/categories/comedy/2.png',
                                    '/src/assets/images/categories/comedy/3.png',
                                    '/src/assets/images/categories/comedy/4.png',
                        ],
                    },
                    {
                        title: "Drama",
                        badge: 'Top 10 In',
                        images: [
                                    '/src/assets/images/categories/drama/1.png',
                                    '/src/assets/images/categories/drama/2.png',
                                    '/src/assets/images/categories/drama/3.png',
                                    '/src/assets/images/categories/drama/4.png',
                        ],
                    },
                    {
                        title: "Action 2",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png',
                        ],
                    },
                    {
                        title: "Adventure 2",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/1.png',
                            '/src/assets/images/categories/adventure/2.png',
                            '/src/assets/images/categories/adventure/3.png',
                            '/src/assets/images/categories/adventure/4.png',
                        ],
                    },
                    {
                        title: "Comedy 2",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/1.png',
                            '/src/assets/images/categories/comedy/2.png',
                            '/src/assets/images/categories/comedy/3.png',
                            '/src/assets/images/categories/comedy/4.png',
                        ],
                    },
                    {
                        title: "Drama 2",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/1.png',
                            '/src/assets/images/categories/drama/2.png',
                            '/src/assets/images/categories/drama/3.png',
                            '/src/assets/images/categories/drama/4.png',
                        ],
                    },
                    {
                        title: "Action 3",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png',
                        ],
                    },
                    {
                        title: "Adventure 3",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/1.png',
                            '/src/assets/images/categories/adventure/2.png',
                            '/src/assets/images/categories/adventure/3.png',
                            '/src/assets/images/categories/adventure/4.png',
                        ],
                    },
                    {
                        title: "Comedy 3",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/1.png',
                            '/src/assets/images/categories/comedy/2.png',
                            '/src/assets/images/categories/comedy/3.png',
                            '/src/assets/images/categories/comedy/4.png',
                        ],
                    },
                    {
                        title: "Drama 3",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/1.png',
                            '/src/assets/images/categories/drama/2.png',
                            '/src/assets/images/categories/drama/3.png',
                            '/src/assets/images/categories/drama/4.png',
                        ],
                    },
                    {
                        title: "Action 4",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png',
                        ],
                    },
                    {
                        title: "Adventure 4",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/1.png',
                            '/src/assets/images/categories/adventure/2.png',
                            '/src/assets/images/categories/adventure/3.png',
                            '/src/assets/images/categories/adventure/4.png',
                        ],
                    },
                    {
                        title: "Comedy 4",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/1.png',
                            '/src/assets/images/categories/comedy/2.png',
                            '/src/assets/images/categories/comedy/3.png',
                            '/src/assets/images/categories/comedy/4.png',
                        ],
                    },
                    {
                        title: "Drama 4",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/1.png',
                            '/src/assets/images/categories/drama/2.png',
                            '/src/assets/images/categories/drama/3.png',
                            '/src/assets/images/categories/drama/4.png',
                        ],
                    },
                ],
                sliderParams: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 16,
                    allowTouchMove: true,
                    breakpoints: {
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            allowTouchMove: false,
                        },
                        1441: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 30,
                            allowTouchMove: false,
                        },
                    }
                }
            },
            {
                title: 'Trending Now',
                movieItems: [
                    {
                        title: "Morbius",
                        duration: '1h 30min',
                        views: '2K',
                        imgSrc: '/src/assets/images/movies/1.png',
                    },
                    {
                        title: "Bhai Jaan",
                        duration: '1h 57min',
                        views: '1.5K',
                        imgSrc: '/src/assets/images/movies/2.png',
                    },
                    {
                        title: "Suraj pe Mangal Bhari",
                        duration: '2h 10min',
                        views: '1.8K',
                        imgSrc: '/src/assets/images/movies/3.png',
                    },
                    {
                        title: "Pathan",
                        duration: '2h 20min',
                        views: '3K',
                        imgSrc: '/src/assets/images/movies/4.png',
                    },
                    {
                        title: "Ant-Man",
                        duration: '1h 42min',
                        views: '5K',
                        imgSrc: '/src/assets/images/movies/5.png',
                    },
                    {
                        title: "Morbius",
                        duration: '1h 30min',
                        views: '2K',
                        imgSrc: '/src/assets/images/movies/1.png',
                    },
                    {
                        title: "Bhai Jaan",
                        duration: '1h 57min',
                        views: '1.5K',
                        imgSrc: '/src/assets/images/movies/2.png',
                    },
                    {
                        title: "Suraj pe Mangal Bhari",
                        duration: '2h 10min',
                        views: '1.8K',
                        imgSrc: '/src/assets/images/movies/3.png',
                    },
                    {
                        title: "Pathan",
                        duration: '2h 20min',
                        views: '3K',
                        imgSrc: '/src/assets/images/movies/4.png',
                    },
                    {
                        title: "Ant-Man",
                        duration: '1h 42min',
                        views: '5K',
                        imgSrc: '/src/assets/images/movies/5.png',
                    },
                    {
                        title: "Morbius",
                        duration: '1h 30min',
                        views: '2K',
                        imgSrc: '/src/assets/images/movies/1.png',
                    },
                    {
                        title: "Bhai Jaan",
                        duration: '1h 57min',
                        views: '1.5K',
                        imgSrc: '/src/assets/images/movies/2.png',
                    },
                    {
                        title: "Suraj pe Mangal Bhari",
                        duration: '2h 10min',
                        views: '1.8K',
                        imgSrc: '/src/assets/images/movies/3.png',
                    },
                    {
                        title: "Pathan",
                        duration: '2h 20min',
                        views: '3K',
                        imgSrc: '/src/assets/images/movies/4.png',
                    },
                    {
                        title: "Ant-Man",
                        duration: '1h 42min',
                        views: '5K',
                        imgSrc: '/src/assets/images/movies/5.png',
                    },
                    {
                        title: "Morbius",
                        duration: '1h 30min',
                        views: '2K',
                        imgSrc: '/src/assets/images/movies/1.png',
                    },
                    {
                        title: "Bhai Jaan",
                        duration: '1h 57min',
                        views: '1.5K',
                        imgSrc: '/src/assets/images/movies/2.png',
                    },
                    {
                        title: "Suraj pe Mangal Bhari",
                        duration: '2h 10min',
                        views: '1.8K',
                        imgSrc: '/src/assets/images/movies/3.png',
                    },
                    {
                        title: "Pathan",
                        duration: '2h 20min',
                        views: '3K',
                        imgSrc: '/src/assets/images/movies/4.png',
                    },
                    {
                        title: "Ant-Man",
                        duration: '1h 42min',
                        views: '5K',
                        imgSrc: '/src/assets/images/movies/5.png',
                    },
                ],
            },
            {
                title: 'New Releases',
                movieItems: [
                    {
                        title: "Adipurush",
                        released: {
                            label: '14 April 2023',
                            dateTime: '2023-04-14',
                        },
                        imgSrc: '/src/assets/images/releases/1.png',
                    },
                    {
                        title: "Jeki Chan",
                        released: {
                            label: '22 April 2023',
                            dateTime: '2023-04-22',
                        },
                        imgSrc: '/src/assets/images/releases/2.png',
                    },
                    {
                        title: "Sin City",
                        released: {
                            label: '13 April 2023',
                            dateTime: '2023-04-13',
                        },
                        imgSrc: '/src/assets/images/releases/3.png',
                    },
                    {
                        title: "The tomorrow war",
                        released: {
                            label: '19 April 2023',
                            dateTime: '2023-04-19',
                        },
                        imgSrc: '/src/assets/images/releases/4.png',
                    },
                    {
                        title: "Misfire",
                        released: {
                            label: '11 April 2023',
                            dateTime: '2023-04-11',
                        },
                        imgSrc: '/src/assets/images/releases/5.png',
                    },
                    {
                        title: "Adipurush",
                        released: {
                            label: '14 April 2023',
                            dateTime: '2023-04-14',
                        },
                        imgSrc: '/src/assets/images/releases/1.png',
                    },
                    {
                        title: "Jeki Chan",
                        released: {
                            label: '22 April 2023',
                            dateTime: '2023-04-22',
                        },
                        imgSrc: '/src/assets/images/releases/2.png',
                    },
                    {
                        title: "Sin City",
                        released: {
                            label: '13 April 2023',
                            dateTime: '2023-04-13',
                        },
                        imgSrc: '/src/assets/images/releases/3.png',
                    },
                    {
                        title: "The tomorrow war",
                        released: {
                            label: '19 April 2023',
                            dateTime: '2023-04-19',
                        },
                        imgSrc: '/src/assets/images/releases/4.png',
                    },
                    {
                        title: "Misfire",
                        released: {
                            label: '11 April 2023',
                            dateTime: '2023-04-11',
                        },
                        imgSrc: '/src/assets/images/releases/5.png',
                    },
                    {
                        title: "Adipurush",
                        released: {
                            label: '14 April 2023',
                            dateTime: '2023-04-14',
                        },
                        imgSrc: '/src/assets/images/releases/1.png',
                    },
                    {
                        title: "Jeki Chan",
                        released: {
                            label: '22 April 2023',
                            dateTime: '2023-04-22',
                        },
                        imgSrc: '/src/assets/images/releases/2.png',
                    },
                    {
                        title: "Sin City",
                        released: {
                            label: '13 April 2023',
                            dateTime: '2023-04-13',
                        },
                        imgSrc: '/src/assets/images/releases/3.png',
                    },
                    {
                        title: "The tomorrow war",
                        released: {
                            label: '19 April 2023',
                            dateTime: '2023-04-19',
                        },
                        imgSrc: '/src/assets/images/releases/4.png',
                    },
                    {
                        title: "Misfire",
                        released: {
                            label: '11 April 2023',
                            dateTime: '2023-04-11',
                        },
                        imgSrc: '/src/assets/images/releases/5.png',
                    },
                    {
                        title: "Adipurush",
                        released: {
                            label: '14 April 2023',
                            dateTime: '2023-04-14',
                        },
                        imgSrc: '/src/assets/images/releases/1.png',
                    },
                    {
                        title: "Jeki Chan",
                        released: {
                            label: '22 April 2023',
                            dateTime: '2023-04-22',
                        },
                        imgSrc: '/src/assets/images/releases/2.png',
                    },
                    {
                        title: "Sin City",
                        released: {
                            label: '13 April 2023',
                            dateTime: '2023-04-13',
                        },
                        imgSrc: '/src/assets/images/releases/3.png',
                    },
                    {
                        title: "The tomorrow war",
                        released: {
                            label: '19 April 2023',
                            dateTime: '2023-04-19',
                        },
                        imgSrc: '/src/assets/images/releases/4.png',
                    },
                    {
                        title: "Misfire",
                        released: {
                            label: '11 April 2023',
                            dateTime: '2023-04-11',
                        },
                        imgSrc: '/src/assets/images/releases/5.png',
                    },
                ],
            },
            {
                title: 'Must - Watch Movies',
                movieItems: [
                    {
                        title: "Kantara",
                        duration: '1h 57min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/kantara.png',
                    },
                    {
                        title: "Pushpa 2",
                        duration: '1h 30min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/pushpa2.png',
                    },
                    {
                        title: "Blade Runner 2049",
                        duration: '1h 42min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/blade-runner-2049.png',
                    },
                    {
                        title: "Adipurush",
                        duration: '2h 10min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/adipurush.png',
                    },
                    {
                        title: "Kantara",
                        duration: '1h 57min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/kantara.png',
                    },
                    {
                        title: "Pushpa 2",
                        duration: '1h 30min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/pushpa2.png',
                    },
                    {
                        title: "Blade Runner 2049",
                        duration: '1h 42min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/blade-runner-2049.png',
                    },
                    {
                        title: "Adipurush",
                        duration: '2h 10min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/adipurush.png',
                    },
                    {
                        title: "Kantara",
                        duration: '1h 57min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/kantara.png',
                    },
                    {
                        title: "Pushpa 2",
                        duration: '1h 30min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/pushpa2.png',
                    },
                    {
                        title: "Blade Runner 2049",
                        duration: '1h 42min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/blade-runner-2049.png',
                    },
                    {
                        title: "Adipurush",
                        duration: '2h 10min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/adipurush.png',
                    },
                    {
                        title: "Kantara",
                        duration: '1h 57min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/kantara.png',
                    },
                    {
                        title: "Pushpa 2",
                        duration: '1h 30min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/pushpa2.png',
                    },
                    {
                        title: "Blade Runner 2049",
                        duration: '1h 42min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/blade-runner-2049.png',
                    },
                    {
                        title: "Adipurush",
                        duration: '2h 10min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/adipurush.png',
                    },
                ],
                sliderParams: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 16,
                    allowTouchMove: true,
                    breakpoints: {
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            allowTouchMove: false,
                        },
                        1441: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 30,
                            allowTouchMove: false,
                        },
                    }
                },
            },
        ]
    },
    {
        title: 'Shows',
        groups: [
            {
                title: 'Our Genres',
                items: categoryItems,
            },
            {
                title: 'Popular Top 10 In Genres',
                items: [
                    {
                        title: "Action",
                        badge: 'Top 10 In',
                        images: [
                                    '/src/assets/images/categories/action/1.png',
                                    '/src/assets/images/categories/action/2.png',
                                    '/src/assets/images/categories/action/3.png',
                                    '/src/assets/images/categories/action/4.png',
                        ],
                    },
                    {
                        title: "Adventure",
                        badge: 'Top 10 In',
                        images: [
                                    '/src/assets/images/categories/adventure/1.png',
                                    '/src/assets/images/categories/adventure/2.png',
                                    '/src/assets/images/categories/adventure/3.png',
                                    '/src/assets/images/categories/adventure/4.png',
                        ],
                    },
                    {
                        title: "Comedy",
                        badge: 'Top 10 In',
                        images: [
                                    '/src/assets/images/categories/comedy/1.png',
                                    '/src/assets/images/categories/comedy/2.png',
                                    '/src/assets/images/categories/comedy/3.png',
                                    '/src/assets/images/categories/comedy/4.png',
                        ],
                    },
                    {
                        title: "Drama",
                        badge: 'Top 10 In',
                        images: [
                                    '/src/assets/images/categories/drama/1.png',
                                    '/src/assets/images/categories/drama/2.png',
                                    '/src/assets/images/categories/drama/3.png',
                                    '/src/assets/images/categories/drama/4.png',
                        ],
                    },
                    {
                        title: "Action 2",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png',
                        ],
                    },
                    {
                        title: "Adventure 2",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/1.png',
                            '/src/assets/images/categories/adventure/2.png',
                            '/src/assets/images/categories/adventure/3.png',
                            '/src/assets/images/categories/adventure/4.png',
                        ],
                    },
                    {
                        title: "Comedy 2",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/1.png',
                            '/src/assets/images/categories/comedy/2.png',
                            '/src/assets/images/categories/comedy/3.png',
                            '/src/assets/images/categories/comedy/4.png',
                        ],
                    },
                    {
                        title: "Drama 2",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/1.png',
                            '/src/assets/images/categories/drama/2.png',
                            '/src/assets/images/categories/drama/3.png',
                            '/src/assets/images/categories/drama/4.png',
                        ],
                    },
                    {
                        title: "Action 3",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png',
                        ],
                    },
                    {
                        title: "Adventure 3",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/1.png',
                            '/src/assets/images/categories/adventure/2.png',
                            '/src/assets/images/categories/adventure/3.png',
                            '/src/assets/images/categories/adventure/4.png',
                        ],
                    },
                    {
                        title: "Comedy 3",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/1.png',
                            '/src/assets/images/categories/comedy/2.png',
                            '/src/assets/images/categories/comedy/3.png',
                            '/src/assets/images/categories/comedy/4.png',
                        ],
                    },
                    {
                        title: "Drama 3",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/1.png',
                            '/src/assets/images/categories/drama/2.png',
                            '/src/assets/images/categories/drama/3.png',
                            '/src/assets/images/categories/drama/4.png',
                        ],
                    },
                    {
                        title: "Action 4",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png',
                        ],
                    },
                    {
                        title: "Adventure 4",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/1.png',
                            '/src/assets/images/categories/adventure/2.png',
                            '/src/assets/images/categories/adventure/3.png',
                            '/src/assets/images/categories/adventure/4.png',
                        ],
                    },
                    {
                        title: "Comedy 4",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/1.png',
                            '/src/assets/images/categories/comedy/2.png',
                            '/src/assets/images/categories/comedy/3.png',
                            '/src/assets/images/categories/comedy/4.png',
                        ],
                    },
                    {
                        title: "Drama 4",
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/1.png',
                            '/src/assets/images/categories/drama/2.png',
                            '/src/assets/images/categories/drama/3.png',
                            '/src/assets/images/categories/drama/4.png',
                        ],
                    },
                ],
                sliderParams: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 16,
                    allowTouchMove: true,
                    breakpoints: {
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            allowTouchMove: false,
                        },
                        1441: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 30,
                            allowTouchMove: false,
                        },
                    }
                }
            },
            {
                title: 'Trending Shows Now',
                movieItems: [
                    {
                        title: "Stranger Things",
                        duration: '1h 30min',
                        season: '4 Season',
                        imgSrc: '/src/assets/images/movies/1.png',
                        href: '/show',
                    },
                    {
                        title: "Money Heist",
                        duration: '1h 57min',
                        season: '5 Season',
                        imgSrc: '/src/assets/images/movies/2.png',
                        href: '/show',
                    },
                    {
                        title: "Lucifer",
                        duration: '2h 10min',
                        season: '3 Season',
                        imgSrc: '/src/assets/images/movies/3.png',
                        href: '/show',
                    },
                    {
                        title: "Gray Man",
                        duration: '2h 20min',
                        season: '2 Season',
                        imgSrc: '/src/assets/images/movies/4.png',
                        href: '/show',
                    },{
                        title: "Stranger Things",
                        duration: '1h 30min',
                        season: '4 Season',
                        imgSrc: '/src/assets/images/movies/1.png',
                        href: '/show',
                    },
                    {
                        title: "Money Heist",
                        duration: '1h 57min',
                        season: '5 Season',
                        imgSrc: '/src/assets/images/movies/2.png',
                        href: '/show',
                    },
                    {
                        title: "Lucifer",
                        duration: '2h 10min',
                        season: '3 Season',
                        imgSrc: '/src/assets/images/movies/3.png',
                        href: '/show',
                    },
                    {
                        title: "Gray Man",
                        duration: '2h 20min',
                        season: '2 Season',
                        imgSrc: '/src/assets/images/movies/4.png',
                        href: '/show',
                    },{
                        title: "Stranger Things",
                        duration: '1h 30min',
                        season: '4 Season',
                        imgSrc: '/src/assets/images/movies/1.png',
                        href: '/show',
                    },
                    {
                        title: "Money Heist",
                        duration: '1h 57min',
                        season: '5 Season',
                        imgSrc: '/src/assets/images/movies/2.png',
                        href: '/show',
                    },
                    {
                        title: "Lucifer",
                        duration: '2h 10min',
                        season: '3 Season',
                        imgSrc: '/src/assets/images/movies/3.png',
                        href: '/show',
                    },
                    {
                        title: "Gray Man",
                        duration: '2h 20min',
                        season: '2 Season',
                        imgSrc: '/src/assets/images/movies/4.png',
                        href: '/show',
                    },{
                        title: "Stranger Things",
                        duration: '1h 30min',
                        season: '4 Season',
                        imgSrc: '/src/assets/images/movies/1.png',
                        href: '/show',
                    },
                    {
                        title: "Money Heist",
                        duration: '1h 57min',
                        season: '5 Season',
                        imgSrc: '/src/assets/images/movies/2.png',
                        href: '/show',
                    },
                    {
                        title: "Lucifer",
                        duration: '2h 10min',
                        season: '3 Season',
                        imgSrc: '/src/assets/images/movies/3.png',
                        href: '/show',
                    },
                    {
                        title: "Gray Man",
                        duration: '2h 20min',
                        season: '2 Season',
                        imgSrc: '/src/assets/images/movies/4.png',
                        href: '/show',
                    },
                ],
                sliderParams: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 16,
                    allowTouchMove: true,
                    breakpoints: {
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            allowTouchMove: false,
                        },
                        1441: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 30,
                            allowTouchMove: false,
                        },
                    }
                },
            },
            {
                title: 'New Released Shows',
                movieItems: [
                    {
                        title: "Stranger Things",
                        duration: '1h 30min',
                        season: '4 Season',
                        imgSrc: '/src/assets/images/movies/1.png',
                        href: '/show',
                    },
                    {
                        title: "Money Heist",
                        duration: '1h 57min',
                        season: '5 Season',
                        imgSrc: '/src/assets/images/movies/2.png',
                        href: '/show',
                    },
                    {
                        title: "Lucifer",
                        duration: '2h 10min',
                        season: '3 Season',
                        imgSrc: '/src/assets/images/movies/3.png',
                        href: '/show',
                    },
                    {
                        title: "Gray Man",
                        duration: '2h 20min',
                        season: '2 Season',
                        imgSrc: '/src/assets/images/movies/4.png',
                        href: '/show',
                    },{
                        title: "Stranger Things",
                        duration: '1h 30min',
                        season: '4 Season',
                        imgSrc: '/src/assets/images/movies/1.png',
                        href: '/show',
                    },
                    {
                        title: "Money Heist",
                        duration: '1h 57min',
                        season: '5 Season',
                        imgSrc: '/src/assets/images/movies/2.png',
                        href: '/show',
                    },
                    {
                        title: "Lucifer",
                        duration: '2h 10min',
                        season: '3 Season',
                        imgSrc: '/src/assets/images/movies/3.png',
                        href: '/show',
                    },
                    {
                        title: "Gray Man",
                        duration: '2h 20min',
                        season: '2 Season',
                        imgSrc: '/src/assets/images/movies/4.png',
                        href: '/show',
                    },{
                        title: "Stranger Things",
                        duration: '1h 30min',
                        season: '4 Season',
                        imgSrc: '/src/assets/images/movies/1.png',
                        href: '/show',
                    },
                    {
                        title: "Money Heist",
                        duration: '1h 57min',
                        season: '5 Season',
                        imgSrc: '/src/assets/images/movies/2.png',
                        href: '/show',
                    },
                    {
                        title: "Lucifer",
                        duration: '2h 10min',
                        season: '3 Season',
                        imgSrc: '/src/assets/images/movies/3.png',
                        href: '/show',
                    },
                    {
                        title: "Gray Man",
                        duration: '2h 20min',
                        season: '2 Season',
                        imgSrc: '/src/assets/images/movies/4.png',
                        href: '/show',
                    },{
                        title: "Stranger Things",
                        duration: '1h 30min',
                        season: '4 Season',
                        imgSrc: '/src/assets/images/movies/1.png',
                        href: '/show',
                    },
                    {
                        title: "Money Heist",
                        duration: '1h 57min',
                        season: '5 Season',
                        imgSrc: '/src/assets/images/movies/2.png',
                        href: '/show',
                    },
                    {
                        title: "Lucifer",
                        duration: '2h 10min',
                        season: '3 Season',
                        imgSrc: '/src/assets/images/movies/3.png',
                        href: '/show',
                    },
                    {
                        title: "Gray Man",
                        duration: '2h 20min',
                        season: '2 Season',
                        imgSrc: '/src/assets/images/movies/4.png',
                        href: '/show',
                    },
                ],
                sliderParams: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 16,
                    allowTouchMove: true,
                    breakpoints: {
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            allowTouchMove: false,
                        },
                        1441: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 30,
                            allowTouchMove: false,
                        },
                    }
                },
            },
            {
                title: 'Must - Watch Shows',
                movieItems: [
                    {
                        title: "Kantara",
                        duration: '1h 57min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/kantara.png',
                    },
                    {
                        title: "Pushpa 2",
                        duration: '1h 30min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/pushpa2.png',
                    },
                    {
                        title: "Blade Runner 2049",
                        duration: '1h 42min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/blade-runner-2049.png',
                    },
                    {
                        title: "Adipurush",
                        duration: '2h 10min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/adipurush.png',
                    },
                    {
                        title: "Kantara",
                        duration: '1h 57min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/kantara.png',
                    },
                    {
                        title: "Pushpa 2",
                        duration: '1h 30min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/pushpa2.png',
                    },
                    {
                        title: "Blade Runner 2049",
                        duration: '1h 42min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/blade-runner-2049.png',
                    },
                    {
                        title: "Adipurush",
                        duration: '2h 10min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/adipurush.png',
                    },
                    {
                        title: "Kantara",
                        duration: '1h 57min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/kantara.png',
                    },
                    {
                        title: "Pushpa 2",
                        duration: '1h 30min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/pushpa2.png',
                    },
                    {
                        title: "Blade Runner 2049",
                        duration: '1h 42min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/blade-runner-2049.png',
                    },
                    {
                        title: "Adipurush",
                        duration: '2h 10min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/adipurush.png',
                    },
                    {
                        title: "Kantara",
                        duration: '1h 57min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/kantara.png',
                    },
                    {
                        title: "Pushpa 2",
                        duration: '1h 30min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/pushpa2.png',
                    },
                    {
                        title: "Blade Runner 2049",
                        duration: '1h 42min',
                        rating: {
                            value: '4.5',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/blade-runner-2049.png',
                    },
                    {
                        title: "Adipurush",
                        duration: '2h 10min',
                        rating: {
                            value: '4',
                            label: '20K',
                        },
                        imgSrc: '/src/assets/images/movies/adipurush.png',
                    },
                ],
                sliderParams: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                    spaceBetween: 16,
                    allowTouchMove: true,
                    breakpoints: {
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            allowTouchMove: false,
                        },
                        1441: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 30,
                            allowTouchMove: false,
                        },
                    }
                },
            },
        ]
    },
];

export default collectionsGroups;