export const locations =[
    "chennai",
    "Coimbotre",
    "Trichy",
    "Madurai",
    "salem",

];
export const Train = [
  {
    id: 1,
    name: "Chennai Express",
    source: "Chennai",
    destination: "Madurai",
    departureTime: "06:00 AM",
    arrivalTime: "12:30 PM",
    price: "600",
    availableDates: ["2025-11-15", "2025-11-16", "2025-11-18", "2025-11-19"],
    TrainType: "Sleeper",
    numberOfSeats: 36,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
        ],
        second: [13, 14, 15, 16, 17, 18],
      },
      upper: {
        first: [
          [19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30],
        ],
        second: [31, 32, 33, 34, 35, 36],
      },
    },
    availableSeats: ["U19", "U24", "U30", "L4", "L16", "L6"],
  },

  {
    id: 2,
    name: "Pandian Superfast",
    source: "Madurai",
    destination: "Chennai",
    departureTime: "07:30 AM",
    arrivalTime: "01:00 PM",
    price: "750",
    availableDates: ["2025-11-15", "2025-11-17", "2025-11-20"],
    TrainType: "AC Chair Car",
    numberOfSeats: 40,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5, 6, 7, 8],
        ],
        second: [9, 10, 11, 12, 13, 14, 15, 16],
      },
      upper: {
        first: [
          [17, 18, 19, 20, 21, 22, 23, 24],
        ],
        second: [25, 26, 27, 28, 29, 30, 31, 32],
      },
    },
    availableSeats: ["L3", "L6", "U19", "U28", "L10"],
  },

  {
    id: 3,
    name: "Vaigai Express",
    source: "Chennai",
    destination: "Madurai",
    departureTime: "01:00 PM",
    arrivalTime: "07:30 PM",
    price: "680",
    availableDates: ["2025-11-16", "2025-11-17"],
    TrainType: "Chair Car",
    numberOfSeats: 32,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
        ],
        second: [9, 10, 11, 12],
      },
      upper: {
        first: [
          [13, 14, 15, 16],
          [17, 18, 19, 20],
        ],
        second: [21, 22, 23, 24, 25, 26, 27, 28],
      },
    },
    availableSeats: ["L2", "L8", "U14", "U21"],
  },

  {
    id: 4,
    name: "Kanyakumari Express",
    source: "Chennai",
    destination: "Kanyakumari",
    departureTime: "05:00 PM",
    arrivalTime: "06:30 AM",
    price: "900",
    availableDates: ["2025-11-18", "2025-11-19", "2025-11-20"],
    TrainType: "Sleeper",
    numberOfSeats: 48,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
        ],
        second: [13, 14, 15, 16, 17, 18],
      },
      upper: {
        first: [
          [19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30],
        ],
        second: [31, 32, 33, 34, 35, 36, 37, 38],
      },
    },
    availableSeats: ["L5", "U22", "U35", "L10"],
  },

  {
    id: 5,
    name: "Tea Garden Express",
    source: "Coimbatore",
    destination: "Mettupalayam",
    departureTime: "09:00 AM",
    arrivalTime: "10:10 AM",
    price: "200",
    availableDates: ["2025-11-15", "2025-11-16"],
    TrainType: "General",
    numberOfSeats: 24,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
        ],
        second: [9, 10, 11, 12],
      },
      upper: {
        first: [
          [13, 14, 15, 16],
          [17, 18, 19, 20],
        ],
        second: [21, 22, 23, 24],
      },
    },
    availableSeats: ["L4", "L7", "U16", "U23"],
  },

  {
    id: 6,
    name: "Nilgiri Mountain Train",
    source: "Mettupalayam",
    destination: "Ooty",
    departureTime: "07:10 AM",
    arrivalTime: "09:15 AM",
    price: "400",
    availableDates: ["2025-11-17", "2025-11-18"],
    TrainType: "Mountain Rail",
    numberOfSeats: 32,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
        ],
        second: [9, 10, 11, 12],
      },
      upper: {
        first: [
          [13, 14, 15, 16],
          [17, 18, 19, 20],
        ],
        second: [21, 22, 23, 24, 25, 26],
      },
    },
    availableSeats: ["U15", "L3", "L6", "U22"],
  },

  {
    id: 7,
    name: "Pearl City Express",
    source: "Tuticorin",
    destination: "Chennai",
    departureTime: "08:00 PM",
    arrivalTime: "06:00 AM",
    price: "850",
    availableDates: ["2025-11-19", "2025-11-20"],
    TrainType: "Sleeper",
    numberOfSeats: 42,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
        ],
        second: [13, 14, 15, 16, 17],
      },
      upper: {
        first: [
          [18, 19, 20, 21, 22, 23],
          [24, 25, 26, 27, 28, 29],
        ],
        second: [30, 31, 32, 33, 34, 35, 36],
      },
    },
    availableSeats: ["U21", "L11", "L3", "U28"],
  },

  {
    id: 8,
    name: "Rockfort Express",
    source: "Trichy",
    destination: "Chennai",
    departureTime: "10:15 PM",
    arrivalTime: "04:45 AM",
    price: "700",
    availableDates: ["2025-11-15", "2025-11-16", "2025-11-18"],
    TrainType: "Sleeper",
    numberOfSeats: 40,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
        ],
        second: [11, 12, 13, 14, 15],
      },
      upper: {
        first: [
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
        second: [26, 27, 28, 29, 30, 31],
      },
    },
    availableSeats: ["L2", "U20", "L7", "U29"],
  },

  {
    id: 9,
    name: "Anantha Express",
    source: "Bangalore",
    destination: "Chennai",
    departureTime: "04:00 PM",
    arrivalTime: "09:00 PM",
    price: "550",
    availableDates: ["2025-11-18", "2025-11-19"],
    TrainType: "Chair Car",
    numberOfSeats: 30,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
        ],
        second: [9, 10, 11, 12, 13],
      },
      upper: {
        first: [
          [14, 15, 16, 17],
          [18, 19, 20, 21],
        ],
        second: [22, 23, 24, 25, 26, 27],
      },
    },
    availableSeats: ["U16", "L5", "U22"],
  },

  {
    id: 10,
    name: "Cauvery Express",
    source: "Chennai",
    destination: "Bangalore",
    departureTime: "09:00 PM",
    arrivalTime: "06:00 AM",
    price: "780",
    availableDates: ["2025-11-17", "2025-11-19", "2025-11-20"],
    TrainType: "AC Sleeper",
    numberOfSeats: 44,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
        ],
        second: [13, 14, 15, 16, 17, 18],
      },
      upper: {
        first: [
          [19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30],
        ],
        second: [31, 32, 33, 34, 35, 36, 37, 38],
      },
    },
    availableSeats: ["U27", "L10", "U34", "L5"],
  },
];

