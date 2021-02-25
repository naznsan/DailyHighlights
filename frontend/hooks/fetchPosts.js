import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function fetchPosts() {
  const {data, error} = useSWR('http://localhost:3001/posts', fetcher);

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const fetchPosts = fetchPosts();