export interface AppState {
  selectedCountry: CountryOption;
}

export interface CovidSummary {
  Global: Global;
  Countries: Country[];
  Date: string;
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
  Date: string;
}

export interface Global {
  NewConfirmed?: number;
  TotalConfirmed?: number;
  NewDeaths?: number;
  TotalDeaths?: number;
  NewRecovered?: number;
  TotalRecovered?: number;
  Date?: string;
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
  Date: string;
  Premium?: Object;
  label?: string;
  value?: string;
}

export interface WorldWip {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CountryOption {
  label: string;
  value: Value;
  slug?: string;
}

interface Value {
  ID?: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
  Premium?: Premium;
}

interface Premium {}

export enum CardType {
  INFECTED = "Infected",
  RECOVERED = "Recovered",
  DEATHS = "Deaths",
}
