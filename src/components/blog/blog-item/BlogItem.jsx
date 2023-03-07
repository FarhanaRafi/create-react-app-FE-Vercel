import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = (props) => {
  const { title, cover, author, _id } = props;
  return (
    <Link to={`/blog/${_id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>
            {title}
            <br />
            <a
              onClick={(e) => e.stopPropagation()}
              href={`${process.env.REACT_APP_URL}/blogPosts/${_id}/pdf`}
            >
              Download pdf
            </a>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor {...author} />
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
