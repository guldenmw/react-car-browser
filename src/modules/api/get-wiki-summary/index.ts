import { IWikiResponse } from '../../interfaces';


/**
 * API wrapper responsible for fetching vehicle summary from Wikipedia
 */
const getWikiSummary = async (vehicleTitle: string): Promise<IWikiResponse> => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${vehicleTitle}?redirect=true`;
  const response = await fetch(url);
  return await response.json();
};

export default getWikiSummary;