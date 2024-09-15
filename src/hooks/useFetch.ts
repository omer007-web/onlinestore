import { useCallback, useEffect, useState } from 'react'

const sendFetch = async (url: string, config: { [key: string]: string }) => {
  const fetchingData = await fetch(url, config)
  const data = await fetchingData.json()
  if (!fetchingData.ok) {
    throw new Error(data.message || 'Something went wrong')
  }
  return data
}

export default function useFetch (
  url: string,
  config: { [key: string]: string },
  initial: any
) {
  const [data, setData] = useState(initial)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const sendRequest = useCallback(
    async function sendRequest () {
      setIsLoading(true)
      const apiData = await sendFetch(url, config)

      try {
        setData(apiData)
      } catch (e: any) {
        setError(e.message || 'something went wrong')
      }
      setIsLoading(false)
    },
    [url, config]
  )

  useEffect(() => {
    if (config && (config.method === 'GET' || !config.method || !config))
      sendRequest()
  }, [sendRequest, config])

  return {
    isLoading,
    error,
    data,
    setData,
    sendFetch
  }
}
