import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import {
  findUserById,
  IDecodedUser,
  verifyUser,
  parseToken,
  addPost,
  editPost,
  posts,
  sleep,
} from "./fakedb";

const port = 8085;
const app = express();
app.use(cors());
app.use(express.json());

// TODO: Obviously use a more secure signing key than "secret"
app.post("/api/user/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = verifyUser(email, password);
    const token = jwt.sign({ id: user.id }, "secret", {
      expiresIn: "2 days",
    });
    res.json({ result: { user, token } });
  } catch (error) {
    res.status(401).json({ error });
  }
});

app.post("/api/user/validation", (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = parseToken(authHeader, res);
    const decodedUser = jwt.verify(token, "secret");
    const user = findUserById((decodedUser as IDecodedUser).id);
    res.json({ result: { user, token } });
  } catch (error) {
    res.status(401).json({ error });
  }
});

app.get("/api/posts", async (req, res) => {
  // Sleep delay goes here
  res.json(posts);
});

// ⭐️ TODO: Implement this yourself
app.get("/api/posts/:id", (req, res) => {
  const id = req.params.id;
  const idNum = Number(id);
  res.json(posts[idNum-1]);
});

/**
 * Problems with this:
 * (1) Authorization Issues:
 *     What if you make a request to this route WITHOUT a token?
 *     What if you make a request to this route WITH a token but
 *     it's invalid/expired?
 * (2) Server-Side Validation Issues:
 *     What if you make a request to this route with a valid token but
 *     with an empty/incorrect payload (post)
 */
app.post("/api/posts", (req, res) => {
  const userId = req.body.userId;
  const incomingPost = req.body;
  addPost(incomingPost, userId);
  res.status(200).json({ success: true });
});

app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const postUpdates = req.body;
  const foundIndex = posts.findIndex(post => post.id === parseInt(id));
  if (foundIndex !== -1) {
    posts[foundIndex] = { ...posts[foundIndex], ...postUpdates };
    res.json({ success: true, message: 'Post updated successfully' });
  } else {
    res.status(404).json({ success: false, message: 'Post not found' });
  }
});

app.listen(port, () => console.log("Server is running"));
