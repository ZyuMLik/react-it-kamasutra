import css from './Post.module.css'

function Post(props) {
    return (
        <div className={css.item}>
            <img  src='https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/380x240'></img>
            {props.message}
            <div>
                <span>like: </span>{props.likesCount}
            </div>
        </div>
    );
}

export default Post;
