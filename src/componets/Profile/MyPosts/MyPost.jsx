import css from './MyPost.module.css'
import Post from './Post/Post';

function MyPost(props) {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                <Post message="Привет, как ты?" likesCount="10"/>
                <Post message="Это мой первый пост" likesCount="15"/>
            </div>
        </div>
            

    );
}

export default MyPost;