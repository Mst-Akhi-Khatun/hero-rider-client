import React from 'react';
import { useForm } from "react-hook-form";

const Rider = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className="container py-5">
            <h1 className="text-center">Register as a Rider</h1>
            <div className="container">
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)} width="50%">
                        <label>Full Name:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Email:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Age:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Address:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Phone:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Driving Licence Image:</label>
                        <input type="file" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Area:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>NID Picture(both side):</label>
                        <input type="file" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Profile Picture Link:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Car Information:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Password:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Confirm Password:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        <label>Vehicle Type:</label>
                        <input type="email" className="px-2 py-2 mb-3 form-control" {...register("email", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" value="Register" className="px-2 py-2 mb-3 form-control" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Rider;