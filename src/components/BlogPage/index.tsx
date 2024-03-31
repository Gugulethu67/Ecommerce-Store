import { Container, Grid, Typography } from "@mui/material";
import BlogPostCard from "../BlogPostCard"; // Import a component for displaying individual blog posts
import { BlogPosts } from "../../data"; // Import your blog post data
const BlogPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h2" sx={{ marginBottom: 4 }}>
        Blog
      </Typography>
      <Grid container spacing={4}>
        {BlogPosts.map((post, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <BlogPostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default BlogPage