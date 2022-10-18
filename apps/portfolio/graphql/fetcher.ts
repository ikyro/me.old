import { GraphQLClient, Variables } from 'graphql-request'
import { packageInfo, userInfo } from './query'

export const client = new GraphQLClient('https://api.github.com/graphql')

const requestHeaders = {
  authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN as string}`,
}

export const fetcher = <T>(query: string, variables?: Variables) => {
  return client.request<T>(query, variables, requestHeaders)
}

export const fetchInfo = async () => {
  const user = await fetcher<{}>(packageInfo, {
    package: 'next-crud',
  })

  return user
}
