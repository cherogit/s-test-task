import {SERVERS_URL} from "./constants";

export const getServers = async () => {
  const response = await fetch(SERVERS_URL)
  const result = await response.json()

  if (!response.ok) throw new Error(result.message)
  return result
}
