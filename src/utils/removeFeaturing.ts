

export function removeFeaturing(artist: string) {
    let result = artist;
    if (result.indexOf('feat') > -1)
        result = result.slice(0, Math.max(0, result.indexOf('feat')));

    if (result.indexOf('(') > -1)
        result = result.slice(0, Math.max(0, result.indexOf('(')));

    return result;
}
