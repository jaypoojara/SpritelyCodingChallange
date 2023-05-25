export type HomeScreenData = {
  firstName: string;
  weatherHigh: number;
  weatherLow: number;
  notficationCount: number;
  features: string[];
};

export type HomeInitialState = {
  loading: boolean | null;
  error: string | null;
  data: HomeScreenData | null;
};
