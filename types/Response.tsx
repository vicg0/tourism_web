export interface Response {
  data: {
    id: number,
    source: string,
    numberOfBookableSeats: number,
    lastTicketingDate: Date,
    itineraries: {
      duration: string,
      segments: {
        departure: {
          iataCode: string
          terminal: string,
          at: Date
        },
        arrival: {
          iataCode: string,
          terminal: string,
          at: Date
        },
      }[]
    }[],

  }[],
  dictionaries: {
    locations: {
      [city: string]: {
        cityCode: string,
        countryCode: string
      }
    }
  }
}