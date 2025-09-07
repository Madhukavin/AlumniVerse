export type Alumni = {
  id: string;
  name: string;
  avatarUrl: string;
  graduationYear: number;
  fieldOfStudy: string;
  location: string;
  skills: string[];
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  postedBy: string;
  avatarUrl: string;
};

export type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
};

export type LeaderboardEntry = {
  id: string;
  rank: number;
  name: string;
  avatarUrl: string;
  points: number;
  contribution: number;
};
