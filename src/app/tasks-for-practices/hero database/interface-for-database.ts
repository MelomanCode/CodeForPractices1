interface IHeroProf {
  name: string;
  universal: string;
  age: number;
  power: string | number;
  history: string;
  worldRank: number;
  imageLink: string;
}

interface ISeries {
  name: string;
  seasons: number;
  seriesInSeason: number | string;
  IMDb: number;
  myTop: number;
  imageLink: string;
}

interface IAnime {
  name: string;
  seasons: number;
  seriesInSeason: number;
  myTop: number;
  category: string;
  imageLink: string;
}

interface IManga {
  name: string;
  chapters: number;
  myTop: number;
  remangaGrade: number;
  imageLink: string;
}

interface IAudiobook {
  name: string;
  books: number;
  chapters: number;
  myTop: number;
  imageLink: string;
}
