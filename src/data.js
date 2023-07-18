const trips = [
 {
        id: 1,
        title: "Madrid",
        oldPrice: 950,
        newPrice: 850,
        coverImg: "madrid.png",
        stats: {
            rating: 4.8
        },
        location: "Spain",
    },
    {
        id: 2,
        title: "Firenze",
        oldPrice: 850,
        newPrice: 750,
        coverImg: "firenze.png",
        stats: {
            rating: 4.5,
        },
        location: "Italy",
    },
    {
        id: 3,
        title: "Paris",
        oldPrice: 699,
        newPrice: 599,
        coverImg: "paris.png",
        stats: {
            rating: 4.4,
        },
        location: "France",
    },
    {
        id: 4,
        title: "London",
        oldPrice: 850,
        newPrice: 750,
        coverImg: "london.png",
        stats: {
            rating: 4.9,
        },
        location: "UK",
    },
    
]

const events = [ 
    {
        id: 1,
        city: "Portofino",
        country: "Italy",
        coverImg: "portofinoitaly.jpg",
        price: "5,42k",
        days: 10,
        stats: {
            rating: 4.9,
        },
    },
    {
        id: 1,
        city: "London",
        country: "UK",
        coverImg: "londoneye.jpg",
        price: "2,42k",
        days: "07",
        stats: {
            rating: 4.8,
        },
    },
    {
        id: 1,
        city: "Osaka",
        country: "Japan",
        coverImg: "osakajp.jpg",
        price: "5,42k",
        days: 10,
        stats: {
            rating: 4.8,
        },
    },
]

const travel = [
    {   id: 5,
        newsletter: "The Amazing Difference a Year of Travelling.",
        date: "July 27, 2021",
        coverImg: "area.png",
    },
    {   id: 6,
        newsletter: "Travel far enough, you meet yourself.",
        date: "July 27, 2021",
        coverImg: "beach.png",
    },
    {   id: 7,
        newsletter: "How to Save Money While Visiting Africa.",
        date: "July 27, 2021",
        coverImg: "mosk.png",
    },
    {   id: 8,
        newsletter: "Reflections on 5 Months of Travel: Time to Hang.",
        date: "July 27, 2021",
        coverImg: "mountain.png",
    }
]

export { trips, events, travel, };