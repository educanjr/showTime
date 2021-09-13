interface IShowImage{
    medium: string,
    original: string
}

export interface IShow{
    id: number,
    url: string,
    name: string,
    type: string,
    language: string,
    genres: Array<string>,
    status: string,
    runtime: number,
    averageRuntime: number,
    premiered: string,
    officialSite: string | null,
    rating: number | null,
    image: IShowImage | null,
    summary: string
}