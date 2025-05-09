export const user = {
  username: "Nkwesi", 
  totalReports: 12,
  totalWeight: 24,
  wasteTypes: ["plastic", "organic", "verre"],
  consecutiveDays: 3,
  photosUploaded: 6,
  visitedPoints: ["Point A", "Point B", "Point C"],
  invitedFriends: 2,
  badges: ["Tri Plastic", "Explorateur", "Ponctuel"]
};

export const collectionPoints = [ // export a mock array of collection point
  {
    id: '1',
    name: 'Collection Point A',
    type: 'Plastic',
    status: 'Full',
    distance: '1.2 km',
  },
  {
    id: '2',
    name: 'Collection Point B',
    type: 'Glass',
    status: 'In Progress',
    distance: '2.5 km',
  },
  {
    id: '3',
    name: 'Collection Point C',
    type: 'Organic',
    status: 'Empty',
    distance: '3.1 km',
  },
];

export const reports = [
  {
    date: "2025-05-05",
    type: "plastic",
    location: "Point A",
    weight: 4
  },
  {
    date: "2025-05-04",
    type: "organic",
    location: "Point C",
    weight: 3
  }
];
export const fetchCollectionPoints = async () => { //Defines an asynchronous function that simulates fetching collection points
  return [
    { id: '1', type: 'Plastic', status: 'empty', distance: '500m' },
    { id: '2', type: 'Organic', status: 'full', distance: '2km' },
    { id: '3', type: 'Glass', status: 'in progress', distance: '1km' },
  ];
};

