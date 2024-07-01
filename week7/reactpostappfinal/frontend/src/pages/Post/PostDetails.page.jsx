import { Link, useLoaderData } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container, Paper, Grid, Text, Title, Image } from "@mantine/core";
import useBoundStore from "../../store/Store";

function PostDetailsPage() {
  const post = useLoaderData();
  const { user } = useBoundStore(state=>state);

  return (
    <>
      <Container>
        <Paper padding="md" shadow="sm">
          <Grid>
            <Grid.Col span={6}>
              <div>
                <Title order={5}>Title:</Title>
                <Text>{post.title}</Text>
              </div>
              <div style={{ marginTop: 10 }}>
                <Title order={5}>Category:</Title>
                <Text>{post.category}</Text>
              </div>
              <div style={{ marginTop: 10 }}>
                <Title order={5}>Content:</Title>
                <Text>{post.content}</Text>
              </div>
              {user && user.id === post.userId &&(
                <Button>
                  <Link to={`/posts/edit/${post.id}`}>Edit</Link>
                </Button>
              )}
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                src={post.image}
                alt={post.title + " image"}
                caption={post.title}
                style={{ width: '100%', height: 'auto', borderRadius:'10px'}}
              />
            </Grid.Col>
          </Grid>
        </Paper>
        <Button>
          <Link to="/posts">Back to Posts</Link>
        </Button>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/` + params.id);
  console.log("I ran!");
  return res.data;
};

export default PostDetailsPage;
