
# Music Search

The `music-search` library can be used for searching and filtering music tracks by title, artist, and album. This search library is platform independent, so you can feed it with tracks from any API and than use it to match your query. It was originally build to match Spotify tracks with Plex and Tidal tracks. 

This library is used by [plex-music-search](https://github.com/jjdenhertog/plex-music-search) and [tidal-music-search](https://github.com/jjdenhertog/tidal-music-search)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Default Settings](#default-settings)
- [Configuration Options](#configuration-options)
- [Examples](#examples)
- [Support](#support)

## Installation

Install the `music-search` library with npm:

```bash
npm install @jjdenhertog/music-search
```

## Usage

The library provides a straightforward API to search tracks based on your specified criteria.

```typescript
import MusicSearch from '@jjdenhertog/music-search';

const musicSearch = MusicSearch.getInstance();
const searchCriteria = { id: "125", title: "Billie Jean", album: "Thriller", artist: "Michael Jackson" };

const tracks = [
  { id: "124", artist: "The Beatles", title: "Hey Jude", album: "The Beatles Again" },
  { id: "125", artist: "Michael Jackson", title: "Billie Jean", album: "Thriller" },
  { id: "126", artist: "Queen", title: "Bohemian Rhapsody", album: "A Night at the Opera" },
  { id: "127", artist: "Nirvana", title: "Smells Like Teen Spirit", album: "Nevermind" },
  { id: "128", artist: "Adele", title: "Rolling in the Deep", album: "21" },
  { id: "129", artist: "The Weeknd", title: "Blinding Lights", album: "After Hours" },
  { id: "130", artist: "Ed Sheeran", title: "Shape of You", album: "Divide" },
  { id: "131", artist: "Drake", title: "Hotline Bling", album: "Views" },
  { id: "132", artist: "Taylor Swift", title: "Shake It Off", album: "1989" },
  { id: "133", artist: "Billie Eilish", title: "bad guy", album: "When We All Fall Asleep, Where Do We Go?" }
];

const result = musicSearch.search(searchCriteria, tracks);
console.log(result);
```
#### What is with the ID while searching?

You might notice that the search query must contain an ID
```
const searchCriteria = { id: "125", title: "Billie Jean", album: "Thriller", artist: "Michael Jackson" };
```

Most of the times when you're searching for a track you are doing it to match one library with the other. For example matching Spotify with Plex. The result after searching will contain the original search query including the id and the results. The results are all the tracks matching with the search query. With this approach you can trace back the results more easily.

If you do not need the id for this purpose, you can simply leave it empty: `{ id: "", title: "Billie Jean", album: "Thriller", artist: "Michael Jackson" }`


## Default Settings

The `music-search` library comes with a set of default configurations, so you can use it right away without any setup. Here’s a breakdown of each default option:

- **filterOutWords**: filters out certain common words and phrases often found in music titles that don’t contribute to unique identification. These include:
  - "original mix"
  - "radio edit"
  - "single edit"
  - "alternate mix"
  - "remastered"
  - "remaster"
  - "single version"
  - "retail mix"
  - "quartet"

- **filterOutQuotes**: removes certain types of quotes from track titles to standardize search strings.
- **cutOffSeparators**: This option cuts off track titles at specific separators often used to append extra information (like versions or remixes). By default, these separators include:
  - `(`
  - `[`
  - `{`
  - `-`
    
- **matchFilters**: The default matching criteria include various conditions to handle different levels of similarity or partial matches. Some of the main criteria are:
  - `Full Match on Artist and Title`: Matches tracks where both the artist and title are exact matches.
  - `Artist Matches and Title Contains`: Matches tracks where the artist matches exactly, and the title contains the search term.
  - `Artist Matches and Title Has 80% Similarity`: Matches tracks where the artist matches exactly, and the title is at least 80% similar to the search term.
  - `Artist Contains and Title Matches`: Matches tracks where the artist partially matches, and the title is an exact match.
  - `Artist and Title Have 85% Similarity`: Matches tracks where both the artist and title reach 85% similarity.
  - `Album Matches, Artist Contains, and Title Has 80% Similarity`: Matches tracks where the album is an exact match, the artist partially matches, and the title has 80% similarity.

These default settings are designed to work well for most common music search scenarios, reducing the need for extensive configuration. However, if you have specific needs, you can customize these options as described in the **Configuration Options** section.

## Configuration Options

Customize `music-search` using the `SearchConfig` options. This allows you to filter out unnecessary words, symbols, and other characters from search terms. Here’s a quick look at the main options:

- **filterOutWords**: Exclude specific words from the title (e.g., "remaster", "radio edit").
- **filterOutQuotes**: Strip certain symbols (e.g., `'`, `"`, `) from titles.
- **cutOffSeparators**: Truncate titles based on certain symbols (e.g., `(`, `[`, `{`, `-`).
- **matchFilters**: Set up specific matching criteria to determine when a track qualifies as a match.

Example:

```typescript
musicSearch.config = {
    filterOutWords: ["remaster", "single edit"],
    matchFilters: [
        { reason: 'Full match on Artist & Title', filter: (item:TrackWithMatching) => item.matching.artist.match && item.matching.title.match },
    ],
};
```

## Examples

1. **Basic Search**

   Find tracks based on title, album, and artist:

   ```typescript
   const result = musicSearch.search({ id, title, album, artist }, tracks);
   ```

2. **Include Matching Details**

   Get more insights on matches by setting `includeMatching` to `true`:

   ```typescript
   const result = musicSearch.search({ id, title, artist }, tracks, true);
   ```

## Support This Open-Source Project ❤️

If you appreciate my work, consider starring this repository or making a donation to support ongoing development. Your support means the world to me—thank you!

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jjdenhertog)

Are you a developer and have some free time on your hand? It would be great if you can help me maintain and improve this library.
