import PropTypes from "prop-types";

function User({name, surname, age, isExist, friends, adress}) {
    return (
        <div>
              <h1> {isExist ? ` ${name[0]} ${surname} (${age}) exist` : "giriş yok" } </h1>

            {adress.title} {adress.zip}
            <br />
            <br />


            { friends && 
            friends.map((friend, index) => <div key={index}> {index+1}. {friend}</div>)
            }


        </div>

        
    )
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    isExist: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    friends: PropTypes.array,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
}

User.defaultProps = {
    isExist: false,
    age: 0
}

export default User;
