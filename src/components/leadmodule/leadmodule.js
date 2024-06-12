import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './leadmodule.css';

function Leadmodule() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const submitForm = async (formValues) => {
        console.log(formValues);
        try {
            let { data } = await axios.post('http://127.0.0.1:8000/api/', formValues);
            window.alert('User created successfully');
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <div>
            <div className="tt">
                <h3>Lead Module</h3>
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="form">
                    <div className="input">
                        <label htmlFor="Name">Name</label>
                        <input type="text" className="Name" {...register('Name', { required: true })} />
                        {errors.Name?.type === 'required' && <p>Name is mandatory</p>}
                        
                        <label htmlFor="CC">CC</label>
                        <input type="text" name="CC" {...register('CC', { required: true })} />
                        {errors.CC?.type === 'required' && <p>CC is mandatory</p>}
                        
                        <label htmlFor="Phone">Phone</label>
                        <input type="number" name="Phone" {...register('Phone', { required: true })} />
                        {errors.Phone?.type === 'required' && <p>Number is mandatory</p>}
                        
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" {...register('Email', { required: true })} />
                        {errors.Email?.type === 'required' && <p>Email is mandatory</p>}
                        
                        <label htmlFor="FeeQuoted">Fee Quoted</label>
                        <input type="text" name="FeeQuoted" {...register('FeeQuoted', { required: true })} />
                        {errors.FeeQuoted?.type === 'required' && <p>Fee is mandatory</p>}
                    </div>
                    <div className="select">
                        <label htmlFor="LeadSource">Lead Source</label>
                        <select name="LeadSource" {...register('LeadSource')}>
                            <option>WalkIn</option>
                        </select>
                        
                        <label htmlFor="TechStack">Tech Stack</label>
                        <select name="TechStack" {...register('TechStack')}>
                            <option>Salesforce</option>
                        </select>
                        
                        <label htmlFor="Courses">Course</label>
                        <select name="Courses" {...register('Courses')}>
                            <option>Angulaar</option>
                        </select>
                        
                        <label htmlFor="ClassMode">Class Mode</label>
                        <select name="ClassMode" {...register('ClassMode')}>
                            <option>HYDClassroom</option>
                        </select>
                        
                        <label htmlFor="BatchTiming">Batch Timing</label>
                        <select name="BatchTiming" {...register('BatchTiming')}>
                            <option></option>
                        </select>
                    </div>
                </div>
                <button type="button">Cancel</button>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default Leadmodule;
