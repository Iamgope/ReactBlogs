const FIREBASE_DOMAIN = 'Api Key';

export async function getAllBlogs() {
  const response = await fetch(`${FIREBASE_DOMAIN}/Blogs.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Blogs.');
  }

  const transformedBlogs = [];

  for (const key in data) {
    const BlogObj = {
      id: key,
      ...data[key],
    };

    transformedBlogs.push(BlogObj);
  }

  return transformedBlogs;
}

export async function getSingleBlog(blogId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Blogs/${blogId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch your blog.');
  }

  const loadedBlog = {
    id: blogId,
    ...data,
  };

  return loadedBlog;
}

export async function addBlog(blogData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Blogs.json`, {
    method: 'POST',
    body: JSON.stringify(blogData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    console.log('lost');
    throw new Error(data.message || 'Could not create blog.');
  }

  return null;
}

