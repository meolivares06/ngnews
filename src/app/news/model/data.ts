export interface RootTopicsByContries {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface Source {
  id?: string
  name: string
}

export interface ErrorAPI {
  status: string
  code: string
  message: string
}

export interface RootSource {
  status: string
  sources: Source[]
}

export interface Source {
  id?: string | undefined
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}
