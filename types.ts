
export interface ZaraInfo {
  name: string;
  age: number;
  location: string;
  interests: string[];
  favoriteSong: string;
  pet: {
    description: string;
    age: string;
  };
  height: string;
  description: string;
}

export interface ConversationStarter {
  topic: string;
  message: string;
  why: string;
}
