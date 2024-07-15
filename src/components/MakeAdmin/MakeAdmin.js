import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount) {
                    setSuccess(true);
                    setEmail('');
                }
                else {
                    setSuccess(false);
                    alert('something went wrong!')
                }
            })

        e.preventDefault()
    }

    return (
        <div className='mt-5'>
            {/* <h1>Admin: make admin page</h1> */}
            <form onSubmit={handleAdminSubmit}>
                <div className="input-group mb-3">
                    <input onBlur={handleOnBlur} type="email" className="form-control" placeholder="john@smith.com" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
                </div>
            </form>
            {success && <div><h3>Made admin successfully</h3></div>}
        </div>
    );
};

export default MakeAdmin;