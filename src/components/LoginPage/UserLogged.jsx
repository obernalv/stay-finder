import './styles/UserLogged.css'

const UserLogged = ({ setUser, user }) => {


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser();
    }

    return (
        <div className="profile-content">
            <article className="profile-article">
                <header>

                    <img className="profile__icon" src={
                        user.gender === 'female'
                            ? '/images/mujer.png'
                            : '/images/hombre.png'
                    }
                        alt="" />
                </header>
                <h2 className="profile__names">{user.firstName} {user.lastName}</h2>
                <button className="profile__logout" onClick={handleLogout}>Logout</button>
            </article>
        </div>
    )
}

export default UserLogged