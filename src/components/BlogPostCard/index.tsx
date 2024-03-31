import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface BlogPost {
    image: string;
    title: string;
    date: string;
    category: string;
  }

  const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="img"
        image={post.image}
        alt={post.title}
        sx={{ objectFit: "cover", maxHeight: 200 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.date}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
          {post.category}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BlogPostCard