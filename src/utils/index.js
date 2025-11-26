export const Train =[
    {
        id:1,
        name:"Chennai Express",
        source:"chennai",
        destination:"Madurai",
        departureTime:"06:00 AM",
        arrivalTime:"12:30 PM",
        price :"600",
        avaibleDates:["2025-11-15","2025-11-16","2025-11-18","2025-11-19"],
        TrainType:"Sleeper",
        numberOfSeats:36,
        seatLayout:{
            lower:{
                first:[
                    [1,2,3,4,5,6],
                    [7,8,9,10,11,12],
                ],
                second:[13,14,15,16,17,18],
            },
            upper:{
                 first:[
                    [19,20,21,22,23,24],
                    [7,8,9,10,11,12],
                ],
            }
        }



    }
]