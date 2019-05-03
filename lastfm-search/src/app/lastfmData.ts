export interface LastfmData {
    bio: {
        links: Array<Object>,
        published: string,
        summary: string,
        content: string
    }
    image: Array<Object>,
    mbid: string
    name: string
    ontour: string
    similar: {
        artist: Array<Object>
    },
    stats: {
        listeners: string,
        playcount: string
    }
    streamable: string,
    tags: {
        tag: Array<Object>
    },
    url: string
}
