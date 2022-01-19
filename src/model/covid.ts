export interface CovidSummary {
  Global: Global;
  Countries: Country[];
  Date: Date;
}

interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: Date;
}

export interface Global {
  NewConfirmed?: number;
  TotalConfirmed?: number;
  NewDeaths?: number;
  TotalDeaths?: number;
  NewRecovered?: number;
  TotalRecovered?: number;
  Date?: Date;
}

export interface CountryTotalStatus {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: Date;
}

export interface WorldWip {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export enum CardType {
  INFECTED = "Infected",
  RECOVERED = "Recovered",
  DEATHS = "Deaths",
}
