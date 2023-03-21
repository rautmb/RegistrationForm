import React, { useEffect, useState } from 'react';
import { } from '../Forms/style.css'

export const Registrationform = () => {
    const [data, setdata] = useState({
        name: '',
        email: '',
        mobileno: '',
        currentcity: '',
        resume: ''
    });

    const [validation, setvalidation] = useState({
        name: '',
        email: '',
        mobileno: '',
        currentcity: '',
        resume: ''
    });

    const [flag, setflag] = useState(false);

    useEffect(() => {
        Validate();
    }, [data, flag]);

    // Form Validation
    const Validate = () => {
        let error = validation;

        if (!data.name) {
            error.name = "Enter name";
        }
        else {
            error.name = ""
        }

        //Email Validation
        if (!data.email) {
            error.email = "Enter email";
        }
        else {
            error.email = ""
        }

        //mobile validation
        if (!data.mobileno) {
            error.mobileno = "Enter mobileno";
        }
        else {
            error.mobileno = ""
        }

        //city validation
        if (!data.currentcity) {
            error.currentcity = "Enter current location";
        }
        else {
            error.currentcity = ""
        }

        setvalidation(error);
    }

    const change = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });

        console.log(data);
    }

    const submitdata = (s) => {
        s.preventDefault();
        console.log(data);

        if (!data.name || !data.email || !data.mobileno || !data.currentcity || !data.resume) {
            alert("All fileds are required");
        }
        else {
            setflag(true);
        }
    }

    return (
        <>
            <pre>{(flag) ? <h2>Hello, {data.name} you have successfully registered!!</h2> : ""}</pre>

            <div className='main_div'>
                <div className='center_div'>
                    <div className='header_name'>Registration Form</div>
                    <br />
                    <div className='Form_main_div'>
                        <form action=''>
                            <input
                                className='form-control'
                                type="text"
                                placeholder='Enter name'
                                name='name'
                                value={data.name}
                                onChange={change} />
                            {validation.name && <p>{validation.name}</p>}
                            {validation.name && console.log(validation)}
                            <br />

                            <input
                                className='form-control'
                                type="email"
                                placeholder='Enter email'
                                name='email'
                                value={data.email}
                                onChange={change} />
                            {validation.email && <p>{validation.email}</p>}

                            <br />

                            <input
                                className='form-control'
                                type="number"
                                placeholder='Enter mobile no'
                                name='mobileno'
                                value={data.mobileno}
                                onChange={change} />
                            {validation.mobileno && <p>{validation.mobileno}</p>}
                            <br />

                            <input
                                className='form-control'
                                type="text"
                                placeholder='Enter Current location'
                                name='currentcity'
                                value={data.currentcity}
                                onChange={change} />
                            {validation.currentcity && <p>{validation.currentcity}</p>}
                            <br />

                            <input
                                className='form-control'
                                type="file"
                                placeholder='Choose file'
                                name='resume'
                                value={data.resume}
                                onChange={change} />
                            <br />
                            <div className='center_btn'>
                                <button onClick={submitdata} className='btn btn-primary' type='button'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}