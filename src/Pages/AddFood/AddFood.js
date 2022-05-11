import React from "react";
import { useForm } from "react-hook-form";
import toast, {Toaster} from 'react-hot-toast';
import './AddFood.css';

const AddFood = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('New Food Added');
            })
    };



    return (
        <div>
            <form className="food_form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder='Name' />
                <input {...register("desc")} placeholder='Description' />
                <input {...register("img")} placeholder='Photo URL' />
                <input type="number" {...register("price")} placeholder='Price' />
                <input type="submit" value={'Add Food'} />
            </form>
            <Toaster />
        </div>
    );
}

export default AddFood;