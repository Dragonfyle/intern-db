interface ApiGetOneJson {
  data: {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
}

interface ApiGetListJson {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: ApiGetOneJson['data'][]
}

export type { ApiGetOneJson, ApiGetListJson }
