import { TextInput, Button, Group, Box } from "@mantine/core";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { useForm } from "@mantine/form";
import { useNavigate, useLoaderData } from "react-router-dom";

export function EditPostPage() {
  const navigate = useNavigate();
  const post = useLoaderData();
  const form = useForm({
    initialValues: {
      title: post.title,
      category: post.category,
      image: post.image,
      content: post.content,
    },
  });

  const handleSubmit = async (values) => {
    const postId = post.id; // Assuming 'values' includes the post ID
    const res = await axios.put(`${DOMAIN}/api/posts/${postId}`, values);
    if (res?.data.success) {
      navigate(`/posts/${postId}`);
    } else {
      console.error('Failed to update the post.'); // Consider adding error handling
    }
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label={<span style={{ fontWeight: 'bold' }}>Title</span>}
          placeholder="Enter a Title"
          {...form.getInputProps("title")}
        />

        <TextInput
          label={<span style={{ fontWeight: 'bold' }}>Category</span>}
          placeholder="Enter a Category"
          {...form.getInputProps("category")}
        />

        <TextInput
          label={<span style={{ fontWeight: 'bold' }}>Image</span>}
          placeholder="Enter an Image"
          {...form.getInputProps("image")}
        />

        <TextInput
          label={<span style={{ fontWeight: 'bold' }}>Content</span>}
          placeholder="Enter some content"
          {...form.getInputProps("content")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Update</Button>
        </Group>
      </form>
    </Box>
  );
}

export const postEditLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};
