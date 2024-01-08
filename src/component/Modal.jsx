import React, { useState } from 'react'


const Modal = ({ showmodal, closeModal, handleSubmit, register,createUser,isToEdit,updateUser }) => {
    // const {register, handleSubmit}= useForm()
   
    const submit = (currentUser) => {
        console.log(isToEdit)
        isToEdit? updateUser(currentUser):createUser(currentUser)
        
    }

    return (
        <section className={`fixed  bg-[#858587] left-0 top-0 right-0 h-screen flex justify-center items-center transition-all ${showmodal ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div className='absolute top-2 '>
                <img src="data:image/jpeg;base64,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" alt="" className='rounded-full h-20 ' />
            </div>
            <form onSubmit={handleSubmit(submit)} className=' bg-[#3C3C3D] text-[#5465FF] text-[16px] text grid gap-2 font-bold [&>label]:grid [&>label]:gap-1 p-4 rounded-md shadow-[0_20px_40px_5px_rgba(0,0,0,0.5)]'>
                <label>
                    <span>
                        Name: <span className='text-red-600'>*</span>
                    </span>
                    <input type="text" placeholder='Enter first name' required minLength={3} className='text-black p-1 capitalize rounded-md outline-none ' {...register("first_name")} />
                </label>

                <label >
                    <span>
                        Last name: <span className='text-red-600'>*</span>
                    </span>
                    <input type="text" placeholder='Enter last name ' required minLength={3} className='text-black p-1 capitalize rounded-md outline-none'{...register("last_name")} />
                </label>

                <label>
                    <span>
                        Email adress: <span className='text-red-600'>*</span>
                    </span>
                    <input type="email" placeholder='Enter email' required className='text-black p-1 rounded-md outline-none '{...register("email")} />
                </label>

                <label>
                    <span>
                        Password: <span className='text-red-600'>*</span>
                    </span>
                    <input type="password" placeholder='Enter password' required minLength={8} maxLength={16} className='text-black p-1 rounded-md outline-none '{...register("password")} />
                </label>

                <label>
                    <span>Birthay:</span>
                    <input type="date" placeholder='Enter dd/mm/aaaa' className='text-black p-1 rounded-md outline-none' {...register("birthday")} />
                </label>

                <label>
                    <span>Image:</span>
                    <input type="text" placeholder='Enter URL of image' className='text-black p-1 capitalize rounded-md outline-none'{...register("image_url")} />
                </label>

                <button className='bg-[#CBFFDA] rounded-md outline-none'>{isToEdit?"Update user":"Save user"} </button>
                <button type='button' onClick={closeModal}>or cancel</button>

            </form>


        </section>
    )
}

export default Modal