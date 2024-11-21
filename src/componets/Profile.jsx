import css from './Profile.module.css'

function Profile() {
    return (
        <div className={css.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=679720f2a94327342bb6a0e160ce7bb8_l-8497208-images-thumbs&n=13"></img>
            </div>
                <div>
                    ava + discription
                </div>
            <div>
                My post
                <div>new post</div>
            </div>
            <div>
                <div className={css.item}>
                    post1
                </div>
                <div className={css.item}>
                    post2
                </div>
            </div>
      </div>
    );
}

export default Profile;