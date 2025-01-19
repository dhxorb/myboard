import { useState } from 'react'
import { useForm } from "react-hook-form"
import './List.css'
import { useNavigate } from "react-router";
import axios from 'axios';

function List() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>이름</label>
            <input {...register("id",
                {
                    //required 반드시 입력해야하는지 체크
                    required: true
                }
            )} />
            <input {...register("name",
                {}
            )} />
            {errors.exampleRequired?.type === "minLength" &&
                "이름은 최소 2글자 이상이어야 합니다."}
            {errors.exampleRequired?.type === "maxLength" && "이름은 최대 5글자입니다."}
            {errors.exampleRequired?.type === "required" && <span>필수값입니다.</span>}

            <button type="submit" >전송</button>
        </form>
    );

}

export default List;