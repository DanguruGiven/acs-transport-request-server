const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

    type Car {
        make: String
        model: String
        year: Int
        body_style: String
        license_number: String
        image: String
    }

    type DriverCoordinates {
        latitude: Float
        longitude: Float
    }

    type Driver {
        id: ID
        first_name: String
        last_name: String
        phone: Int
        image: String
        level: Int
        rating: Float
        trips: Int
        car: Car
        coordinates: DriverCoordinates
    }

    type LocationCoordinates {
        latitude: Float
        longitude: Float
    }

    type VisitedLocation {
        street: String
        name: String
        suburb: String
        city: String
        code: Int
        coords: LocationCoordinates
    }

    type Query {
        drivers: [Driver]
        visitedLocations: [VisitedLocation]
    }
`;

const drivers = [
    {
        id: 1,
        first_name: "given",
        last_name: "danguru",
        phone: "0761958601",
        image: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/14064112_290351101342985_2390455606712725037_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=tCYYDydCvvcAX8T6ahC&_nc_ht=scontent-jnb1-1.xx&oh=8b3e27ae1ab4e1fe1740cde372e198aa&oe=60388A6C",
        status: "",
        level: 3,
        rating: 4.5,
        trips: 85,
        car: {
            make: "volkswagen",
            model: "polo",
            year: 2018,
            body_style: "hatchback",
            license_number: "hw12yugp",
            image: "https://preview.netcarshow.com/Volkswagen-Polo_GTI-2018-hd.jpg"
        },
        coordinates: {
            latitude: -25.981690,
            longitude: 28.113512
        }
    },
    {
        id: 2,
        first_name: "thabo",
        last_name: "mateta",
        phone: "0761958601",
        image: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/60876670_2849359375135916_1162312523613995008_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=bAMxfKSOSD8AX8nydWe&_nc_ht=scontent-jnb1-1.xx&oh=904eb3e9ad74b519a44f3342590b8d7e&oe=603771B0",
        status: "",
        level: 4,
        rating: 4.0,
        trips: 110,
        car: {
            make: "volkswagen",
            model: "golf",
            year: 2020,
            body_style: "hatchback",
            license_number: "hw12yugp",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFU6qKY3aezqYncT4yUrSaNL2giFo0yuZag&usqp=CAU"
        },
        coordinates: {
            latitude: -25.981097,
            longitude: 28.120514
        }
    },
    {
        id: 3,
        first_name: "vusi",
        last_name: "mosena",
        phone: "0761958601",
        image: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/50973723_779661832384413_3553513004198789120_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=QezzfFnRiT8AX8X3NLS&_nc_ht=scontent-jnb1-1.xx&oh=d333be05a4386f1d8e0a45274f4d0bf7&oe=6037232F",
        status: "",
        level: 4,
        rating: 4.5,
        trips: 90,
        car: {
            make: "volkswagen",
            model: "tiguan",
            year: 2016,
            body_style: "crossover",
            license_number: "hw12yugp",
            image: "https://i.pinimg.com/originals/f5/82/cd/f582cd616488b0641fa25642ee7d7bbd.jpg"
        },
        coordinates: {
            latitude: -25.977719,
            longitude: 28.118241
        }
    },
    {
        id: 4,
        first_name: "nyiko",
        last_name: "mbhiza",
        phone: "0761958601",
        image: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/127752291_3937933619573660_8779604902429565386_o.jpg?_nc_cat=107&ccb=2&_nc_sid=84a396&_nc_ohc=vWQDwlPd6aMAX8VbTv7&_nc_ht=scontent-jnb1-1.xx&oh=40060efc1d405f5189b1189e97fffe8f&oe=60387579",
        status: "",
        level: 3,
        rating: 3.8,
        trips: 69,
        car: {
            make: "bmw",
            model: "4 series",
            year: 2014,
            body_style: "coupe",
            license_number: "hw12yugp",
            image: "https://cdn.bmwblog.com/wp-content/uploads/2020/07/BMW-starts-G22-4-Series-production-at-Dingolfing-21.jpg"
        },
        coordinates: {
            latitude: -25.982530,
            longitude: 28.119129
        }
    }
];

const visitedLocations = [
    {
        street: "magwa & lone creek cress",
        name: "mall of africa",
        suburb: "waterval city",
        city: "midrand",
        code: "1686",
        coords: {
            latitude: -26.015077,
            longitude: 28.107612
        }
    },
    {
        street: "1685 old pretoria rd",
        name: "boulders shopping",
        suburb: "halfway house estate",
        city: "midrand",
        code: "1685",
        coords: {
            latitude: -25.996139,
            longitude: 28.127204
        }
    },
    {
        street: "old pretoria main road",
        name: "gautrain station",
        suburb: "halfway house estates",
        city: "midrand",
        code: "1685",
        coords: {
            latitude: -25.995502,
            longitude: 28.136375
        }
    },
    {
        street: "cnr new & lever rd",
        name: "san ridge",
        suburb: "midridge park",
        city: "midrand",
        code: "1682",
        coords: {
            latitude: -25.976905,
            longitude: 28.117793
        }
    }
];

const resolvers = {
    Query: {
        drivers: () => drivers,
        visitedLocations: () => visitedLocations,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});