import { fetcher } from '../graphql/fetcher'
import { PackageInfo, UserInfo, packageInfo, userInfo } from '../graphql/query'

export const getUser = async () => {
  const { viewer: user } = await fetcher<UserInfo>(userInfo)
  const {
    viewer: { repository: crud },
  } = await fetcher<PackageInfo>(packageInfo, {
    package: 'next-crud',
  })
  const {
    viewer: { repository: pokedex },
  } = await fetcher<PackageInfo>(packageInfo, {
    package: 'PokePokedex',
  })

  return {
    user,
    repos: [crud, pokedex],
  }
}
