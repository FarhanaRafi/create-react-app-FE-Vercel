import React from "react";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [posts, setPosts] = useState([]);
  const url = process.env.REACT_APP_URL;

  const fetchBlog = async () => {
    let res = await fetch(url + "/blogPosts/");
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      setPosts(data);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
