import { Response } from "express";

export interface IDecodedUser {
  id: number;
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
      "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_640.jpg",
    userId: 1,
  },
  {
    id: 2,
    title: "Beautiful BC",
    category: "nature",
    content: "BC is a province full of beauty at every corner.",
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
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

export const editPost = (updatedPost: any) => {
  // Find the index of the post to be updated in the posts array
  const index = posts.findIndex(post => post.id === updatedPost.id);
  // Check if the post exists; if it does, update it
  if (index !== -1) {
    posts[index] = {
      ...posts[index],  // Copy existing properties
      ...updatedPost    // Overwrite and add new properties from updatedPost
    };
  } else {
    throw new Error('Post not found');
  }
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
