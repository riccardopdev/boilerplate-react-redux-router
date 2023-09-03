import { httpGet, httpPost } from '../api/baseAPI';
import { Form, useActionData, useLoaderData } from 'react-router-dom';

const Posts = () => {
    const { posts, comments } = useLoaderData();
    const message = useActionData();

    return (
        <>
            <h1>Posts Page</h1>
            <Form method="post">
                <div>
                    <label htmlFor="title">Post title</label>
                    <input id="title" name="title" type="text" />
                </div>
                {message}
                <div>
                    <button>Create Post</button>
                </div>
            </Form>
            <hr />
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
            <hr />
            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </>
    );
};

async function loader({ request: { signal } }) {
    const posts = httpGet('posts?_limit=6', { signal });
    const comments = httpGet('comments?_limit=16', { signal });

    return {
        posts: await posts,
        comments: await comments,
    };
}

async function action({ request }) {
    const data = await request.formData();
    const title = data.get('title');
    let message = '';

    try {
        await httpPost('posts', { title });
        message = 'Post created.';
    } catch (error) {
        message = 'There was an error creating the post.';
    }

    return message;
}

export const PostsRoute = {
    loader,
    action,
    element: <Posts />,
};
