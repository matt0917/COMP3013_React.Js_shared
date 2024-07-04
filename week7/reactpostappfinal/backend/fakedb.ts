import { Response } from "express";

export interface IDecodedUser {
  id: number;
}

type PostProps = {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
  userId: number;
}

const users = [
  { id: 1, email: "john123@gmail.com", password: "123" },
  { id: 2, email: "sandra123@gmail.com", password: "123" },
  { id: 3, email: "jsp@gmail.com", password: "123" },
];

export const posts = [
  {
    id: 1,
    title: "Bird",
    category: "nature",
    content:
      "Belted Kingfishers are large-headed birds with a shaggy crest on the back of the head.",
    image:
      "https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_1280.jpg",
    userId: 1,
  },
  {
    id: 2,
    title: "Beautiful BC",
    category: "nature",
    content: "BC is a province full of beauty at every corner.",
    image:
      "https://cdn.pixabay.com/photo/2016/06/17/04/26/mountain-1462655_1280.jpg",
    userId: 2,
  },
  {
    id: 3,
    title: "Bird",
    category: "nature",
    content: "Flamingos are a type of wading bird known for their distinctive pink and red plumage, which comes from the carotenoid pigments in their diet of algae and crustaceans. They are famous for their odd behavior of standing on one leg, which is believed to conserve body heat while resting in cold water.",
    image:
      "https://cdn.pixabay.com/photo/2020/03/03/06/40/flamingo-4897656_1280.jpg",
    userId: 3,
  },
];

export const addPost = (post: any, userId: number) => {
  // Calculate the next unique ID based on the maximum ID currently in the posts array
  const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
  // Assign new unique ID and user ID from the logged-in user context
  post.id = newId;
  post.userId = userId; // This should be passed from the authenticated user's session or token
  // Push the new post into the posts array
  posts.push(post);
};

export const updatePost = (incomingPost: PostProps) => {
  const foundPost = posts.find(post => post.id === incomingPost.id);
  if (!foundPost) {
    throw new Error("Post not found");
  }
  Object.assign(foundPost, incomingPost);
};


export const verifyUser = (email: string, password: string) => {
  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });
  if (!user) throw new Error("User not found");
  return user;
};

export const findUserById = (id: number) => {
  const user = users.find((user) => user.id === id);
  if (!user) throw new Error("User not found");
  return user;
};

export const parseToken = (authHeader: string | undefined, res: Response) => {
  if (!authHeader) {
    res.status(403).send("Header does not exist");
    return "";
  }
  return authHeader.split(" ")[1];
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
