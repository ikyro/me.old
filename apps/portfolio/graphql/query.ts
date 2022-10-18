import { gql } from 'graphql-request'

export type UserInfo = {
  viewer: {
    avatarUrl: string
    bio: string
    createdAt: string
    url: string
    twitterUsername: string
  }
}

export type Repository = {
  name: string
  url: string
  homepageUrl: string
  createdAt: string
  updatedAt: string
}

export type PackageInfo = {
  viewer: {
    repository: Repository
  }
}

export const userInfo = gql`
  {
    viewer {
      avatarUrl
      bio
      createdAt
      url
      twitterUsername
    }
  }
`

export const packageInfo = gql`
  query getPackage($package: String!) {
    viewer {
      repository(name: $package) {
        name
        url
        homepageUrl
        createdAt
        updatedAt
      }
    }
  }
`
