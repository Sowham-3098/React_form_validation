const countries = [
    {
      id: 1,
      name: "India",
      mobilePrefix: "+91",
      cities: [
        {
          id: 1,
          name: "Delhi",
        },
        {
          id: 2,
          name: "Mumbai",
        },
        {
          id: 3,
          name: "Chennai",
        },
        {
          id: 4,
          name: "Kolkata",
        },
        {
          id: 5,
          name: "Bangalore",
        },
      ],
    },
    {
      id: 2,
      name: "USA",
      mobilePrefix: "+1",
      cities: [
        {
          id: 1,
          name: "New York",
        },
        {
          id: 2,
          name: "Los Angeles",
        },
        {
          id: 3,
          name: "Chicago",
        },
        {
          id: 4,
          name: "Houston",
        },
        {
          id: 5,
          name: "Phoenix",
        },
      ],
    },
    {
      id: 3,
      name: "UK",
      mobilePrefix: "+44",
      cities: [
        {
          id: 1,
          name: "London",
        },
        {
          id: 2,
          name: "Birmingham",
        },
        {
          id: 3,
          name: "Leeds",
        },
        {
          id: 4,
          name: "Glasgow",
        },
        {
          id: 5,
          name: "Sheffield",
        },
      ],
    },
    {
      id: 4,
      name: "Australia",
      mobilePrefix: "+61",
      cities: [
        {
          id: 1,
          name: "Sydney",
        },
        {
          id: 2,
          name: "Melbourne",
        },
        {
          id: 3,
          name: "Brisbane",
        },
        {
          id: 4,
          name: "Perth",
        },
        {
          id: 5,
          name: "Adelaide",
        },
      ],
    },
    {
      id: 5,
      name: "Canada",
      mobilePrefix: "+1",
      cities: [
        {
          id: 1,
          name: "Toronto",
        },
        {
          id: 2,
          name: "Montreal",
        },
        {
          id: 3,
          name: "Vancouver",
        },
        {
          id: 4,
          name: "Calgary",
        },
        {
          id: 5,
          name: "Ottawa",
        },
      ],
    },
    {
      id: 6,
      name: "Germany",
      mobilePrefix: "+49",
      cities: [
        {
          id: 1,
          name: "Berlin",
        },
        {
          id: 2,
          name: "Hamburg",
        },
        {
          id: 3,
          name: "Munich",
        },
        {
          id: 4,
          name: "Frankfurt",
        },
        {
          id: 5,
          name: "Stuttgart",
        },
      ],
    },
    {
      id: 7,
      name: "France",
      mobilePrefix: "+33",
      cities: [
        {
          id: 1,
          name: "Paris",
        },
        {
          id: 2,
          name: "Marseille",
        },
        {
          id: 3,
          name: "Lyon",
        },
        {
          id: 4,
          name: "Toulouse",
        },
        {
          id: 5,
          name: "Nice",
        },
      ],
    },
    {
      id: 8,
      name: "Italy",
      mobilePrefix: "+39",
      cities: [
        {
          id: 1,
          name: "Rome",
        },
        {
          id: 2,
          name: "Milan",
        },
        {
          id: 3,
          name: "Naples",
        },
        {
          id: 4,
          name: "Turin",
        },
        {
          id: 5,
          name: "Palermo",
        },
      ],
    },
    {
      id: 9,
      name: "Japan",
      mobilePrefix: "+81",
      cities: [
        {
          id: 1,
          name: "Tokyo",
        },
        {
          id: 2,
          name: "Yokohama",
        },
        {
          id: 3,
          name: "Osaka",
        },
        {
          id: 4,
          name: "Nagoya",
        },
        {
          id: 5,
          name: "Kyoto",
        },
      ],
    },
    {
      id: 10,
      name: "China",
      mobilePrefix: "+86",
      cities: [
        {
          id: 1,
          name: "Shanghai",
        },
        {
          id: 2,
          name: "Beijing",
        },
        {
          id: 3,
          name: "Shenzhen",
        },
        {
          id: 4,
          name: "Guangzhou",
        },
        {
          id: 5,
          name: "Chengdu",
        },
      ],
    },
    {
      id: 11,
      name: "Brazil",
      mobilePrefix: "+55",
      cities: [
        {
          id: 1,
          name: "Sao Paulo",
        },
        {
          id: 2,
          name: "Rio de Janeiro",
        },
        {
          id: 3,
          name: "Salvador",
        },
        {
          id: 4,
          name: "Brasilia",
        },
        {
          id: 5,
          name: "Fortaleza",
        },
      ],
    },
    {
      id: 12,
      name: "South Africa",
      mobilePrefix: "+27",
      cities: [
        {
          id: 1,
          name: "Johannesburg",
        },
        {
          id: 2,
          name: "Cape Town",
        },
        {
          id: 3,
          name: "Durban",
        },
        {
          id: 4,
          name: "Pretoria",
        },
        {
          id: 5,
          name: "Bloemfontein",
        },
      ],
    },
    {
      id: 13,
      name: "Russia",
      mobilePrefix: "+7",
      cities: [
        {
          id: 1,
          name: "Moscow",
        },
        {
          id: 2,
          name: "Saint Petersburg",
        },
        {
          id: 3,
          name: "Novosibirsk",
        },
        {
          id: 4,
          name: "Yekaterinburg",
        },
        {
          id: 5,
          name: "Nizhny Novgorod",
        },
      ],
    },
    {
      id: 14,
      name: "Mexico",
      mobilePrefix: "+52",
      cities: [
        {
          id: 1,
          name: "Mexico City",
        },
        {
          id: 2,
          name: "Guadalajara",
        },
        {
          id: 3,
          name: "Monterrey",
        },
        {
          id: 4,
          name: "Puebla",
        },
        {
          id: 5,
          name: "Tijuana",
        },
      ],
    },
    {
      id: 15,
      name: "Spain",
      mobilePrefix: "+34",
      cities: [
        {
          id: 1,
          name: "Madrid",
        },
        {
          id: 2,
          name: "Barcelona",
        },
        {
          id: 3,
          name: "Valencia",
        },
        {
          id: 4,
          name: "Seville",
        },
        {
          id: 5,
          name: "Bilbao",
        },
      ],
    },
    {
      id: 16,
      name: "Argentina",
      mobilePrefix: "+54",
      cities: [
        {
          id: 1,
          name: "Buenos Aires",
        },
        {
          id: 2,
          name: "Cordoba",
        },
        {
          id: 3,
          name: "Rosario",
        },
        {
          id: 4,
          name: "Mendoza",
        },
        {
          id: 5,
          name: "La Plata",
        },
      ],
    },
    {
      id: 17,
      name: "Nigeria",
      mobilePrefix: "+234",
      cities: [
        {
          id: 1,
          name: "Lagos",
        },
        {
          id: 2,
          name: "Abuja",
        },
        {
          id: 3,
          name: "Kano",
        },
        {
          id: 4,
          name: "Ibadan",
        },
        {
          id: 5,
          name: "Benin City",
        },
      ],
    },
    {
      id: 18,
      name: "Indonesia",
      mobilePrefix: "+62",
      cities: [
        {
          id: 1,
          name: "Jakarta",
        },
        {
          id: 2,
          name: "Surabaya",
        },
        {
          id: 3,
          name: "Bandung",
        },
        {
          id: 4,
          name: "Medan",
        },
        {
          id: 5,
          name: "Semarang",
        },
      ],
    },
    {
      id: 19,
      name: "Turkey",
      mobilePrefix: "+90",
      cities: [
        {
          id: 1,
          name: "Istanbul",
        },
        {
          id: 2,
          name: "Ankara",
        },
        {
          id: 3,
          name: "Izmir",
        },
        {
          id: 4,
          name: "Bursa",
        },
        {
          id: 5,
          name: "Antalya",
        },
      ],
    },
    {
      id: 20,
      name: "Philippines",
      mobilePrefix: "+63",
      cities: [
        {
          id: 1,
          name: "Quezon City",
        },
        {
          id: 2,
          name: "Manila",
        },
        {
          id: 3,
          name: "Davao City",
        },
        {
          id: 4,
          name: "Cebu City",
        },
        {
          id: 5,
          name: "Zamboanga City",
        },
      ],
    },
    {
      id: 21,
      name: "Egypt",
      mobilePrefix: "+20",
      cities: [
        {
          id: 1,
          name: "Cairo",
        },
        {
          id: 2,
          name: "Alexandria",
        },
        {
          id: 3,
          name: "Giza",
        },
        {
          id: 4,
          name: "Shubra El-Kheima",
        },
        {
          id: 5,
          name: "Port Said",
        },
      ],
    },
    {
      id: 22,
      name: "Vietnam",
      mobilePrefix: "+84",
      cities: [
        {
          id: 1,
          name: "Ho Chi Minh City",
        },
        {
          id: 2,
          name: "Hanoi",
        },
        {
          id: 3,
          name: "Haiphong",
        },
        {
          id: 4,
          name: "Da Nang",
        },
        {
          id: 5,
          name: "Can Tho",
        },
      ],
    },
    {
      id: 23,
      name: "Thailand",
      mobilePrefix: "+66",
      cities: [
        {
          id: 1,
          name: "Bangkok",
        },
        {
          id: 2,
          name: "Nonthaburi",
        },
        {
          id: 3,
          name: "Chiang Mai",
        },
        {
          id: 4,
          name: "Pattaya",
        },
        {
          id: 5,
          name: "Phuket",
        },
      ],
    },
    {
      id: 24,
      name: "Myanmar",
      mobilePrefix: "+95",
      cities: [
        {
          id: 1,
          name: "Yangon",
        },
        {
          id: 2,
          name: "Mandalay",
        },
        {
          id: 3,
          name: "Naypyidaw",
        },
        {
          id: 4,
          name: "Bago",
        },
        {
          id: 5,
          name: "Taunggyi",
        },
      ],
    },
    {
      id: 25,
      name: "South Korea",
      mobilePrefix: "+82",
      cities: [
        {
          id: 1,
          name: "Seoul",
        },
        {
          id: 2,
          name: "Busan",
        },
        {
          id: 3,
          name: "Incheon",
        },
        {
          id: 4,
          name: "Daegu",
        },
        {
          id: 5,
          name: "Daejeon",
        },
      ],
    },
    {
      id: 26,
      name: "Colombia",
      mobilePrefix: "+57",
      cities: [
        {
          id: 1,
          name: "Bogotá",
        },
        {
          id: 2,
          name: "Medellín",
        },
        {
          id: 3,
          name: "Cali",
        },
        {
          id: 4,
          name: "Barranquilla",
        },
        {
          id: 5,
          name: "Cartagena",
        },
      ],
    },
    {
      id: 27,
      name: "Sri Lanka",
      mobilePrefix: "+94",
      cities: [
        {
          id: 1,
          name: "Colombo",
        },
        {
          id: 2,
          name: "Kandy",
        },
        {
          id: 3,
          name: "Galle",
        },
        {
          id: 4,
          name: "Jaffna",
        },
        {
          id: 5,
          name: "Negombo",
        },
      ],
    },
  ];
  
  export default countries;
  