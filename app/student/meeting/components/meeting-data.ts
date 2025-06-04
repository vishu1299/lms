export interface Meeting {
  title: string
  date: string
  duration: string
  participants: number
  type: string
}

export const meetings: Meeting[] = [
  {
    title: "Project Planning Session",
    date: "Dec 10, 2023",
    duration: "1h 30m",
    participants: 34,
    type: "Private",
  },
  {
    title: "Team Building Workshop",
    date: "Dec 10, 2023",
    duration: "1h",
    participants: 23,
    type: "Public",
  },
  {
    title: "Marketing Strategy Review",
    date: "Dec 10, 2023",
    duration: "2h",
    participants: 76,
    type: "Private",
  },
  {
    title: "Project Planning Session",
    date: "Dec 10, 2023",
    duration: "2h",
    participants: 22,
    type: "Private",
  },
  {
    title: "Team Building Workshop",
    date: "Dec 10, 2023",
    duration: "2h",
    participants: 12,
    type: "Private",
  },
  {
    title: "Marketing Strategy Review",
    date: "Dec 10, 2023",
    duration: "2h",
    participants: 34,
    type: "Public",
  },
  {
    title: "Team Building Workshop",
    date: "Dec 10, 2023",
    duration: "2h",
    participants: 26,
    type: "Public",
  },
]
