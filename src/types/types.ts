export interface IVoivodeshipOption {
    id: number
    name: string
    country_id: number
    country_code: string
    country_name: string
    state_code: string
    type: null
    latitude: string
    longitude: string
}

export interface ICityOption {
    id: number,
    name: string,
    state_id: number,
    state_code: string,
    state_name: string,
    country_id: number,
    country_code: string,
    country_name: string,
    latitude: string,
    longitude: string,
    wikiDataId: string
}

export interface IVoivodeships {
  voivodeships: IVoivodeshipOption[]
  cities: ICityOption[]
}
