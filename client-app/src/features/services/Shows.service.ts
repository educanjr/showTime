import API from './API';

interface IShowAPIModel {
    score: number;
    show: {
        averageRuntime: number;
        genres: Array<string>
        id: number
        image: {
            medium: string,
            original: string
        } | null;
        language: string;
        name: string;
        officialSite: string | null;
        premiered: string;
        rating: {
            average: number | null
        };
        runtime: number;
        status: string;
        summary: string;
        type: string;
        url: string;
    }
}

export const ShowService = {
    getByCategory: (category: string): Promise<IShowAPIModel[]> => API.get(`/shows?q=${category}`),
}
