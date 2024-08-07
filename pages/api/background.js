const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Pranveer Singh Institute Of Technology, Kanpur',
                degree: "Bachelor's ",
                detail: "Bachelor's Degree in Computer Application's from Pranveer Singh Institute Of Technology, Kanpur.",
                year: '2022-2025'
            },
            {
                id: 1,
                title: 'Mother Teresa Mission Higher Secondary School, Kanpur',
                degree: 'Intermediate, ISC',
                detail: "Completed Intermediate education (12th grade) at Mother Teresa Mission Higher Secondary School, Kanpur, with a focus on Science and Mathematics.",
                year: '2021-2022'
            },
            {
                id: 2,
                title: 'Mother Teresa Mission Higher Secondary School, Kanpur',
                degree: 'High School, ICSE',
                detail: "Completed High School education (10th grade) at Mother Teresa Mission Higher Secondary School, Kanpur, with a comprehensive curriculum including core subjects such as Mathematics, Science, and Social Studies.",
                year: '2019-2020'
            },
        ]
    },
    // {
    //     expCards: [
    //         {
    //             id: 1,
    //             title: 'JMM Technologies',
    //             role: 'Frontend Developer',
    //             url: 'https://jmm.ltd/',
    //             desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
    //             year: '02/2023 - Present',
    //             location: 'Peshawar, Pakistan'
    //         },
    //         {
    //             id: 2,
    //             title: 'HauzaTech',
    //             role: 'Internee',
    //             url: 'no website',
    //             desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
    //             year: '02/2023 - Present',
    //             location: 'Peshawar, Pakistan'
    //         },
    //         {
    //             id: 3,
    //             title: 'Encoder Bytes',
    //             role: 'PHP Developer',
    //             url: 'https://www.encoderbytes.com/',
    //             desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
    //             year: '09/2020 - 02/2021',
    //             location: 'Peshawar, Pakistan'
    //         },

    //     ]
    // }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
