import MyPost from './MyPosts/MyPost';
import css from './Profile.module.css'

function Profile() {
    return (
            <div>
                <div>
                    <img src="https://img.freepik.com/free-photo/view-beautiful-persian-domestic-cat_23-2151773826.jpg?t=st=1732250192~exp=1732253792~hmac=62924a49f89a01736cd82bb7bed6cdcf27e0f6e01c3237fc81f70118816ad337&w=996"></img>
                </div>
                <div>
                    ava + discription
                </div> 
                <MyPost />    
            </div>
            
    );
}

export default Profile;