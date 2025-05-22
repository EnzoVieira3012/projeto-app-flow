interface Podcast {
  id: number;
  title: string;
  description: string;
}

export class PodcastManager {
  private podcasts: Podcast[] = [];
  private nextId: number = 1;

  addPodcast(title: string, description: string): Podcast {
    const newPodcast: Podcast = {
      id: this.nextId++,
      title,
      description,
    };
    this.podcasts.push(newPodcast);
    return newPodcast;
  }

  getPodcasts(): Podcast[] {
    return this.podcasts;
  }
}