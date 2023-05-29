import { destinations } from "./destinations.json";

export type DestinationProps = (typeof destinations)[0];

export const getDetDestinationByName = (name: string) =>
  destinations.find(
    (destination) => destination.name.toLowerCase() === name.toLowerCase()
  );

export const isValidDestination = (str: string) =>
  destinations.some(
    (destination) => destination.name.toLowerCase() === str.toLowerCase()
  );
