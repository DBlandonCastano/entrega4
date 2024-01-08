import { IconEdit, IconTrashFilled } from '@tabler/icons-react'
import React, { useState } from 'react'
import UserCard from './UserCard'


const UserList = ({ users, deleteMovies,handleUpdateUser }) => {

    return (
        <section >
            {users.map((user) => (
                <section className='m-1'>
                    <article  key={user.id} className='bg-[rgb(125,123,123)] rounded-md p-1 '>
                        <header className='flex justify-between gap-10 p-2 capitalize'>
                            <h2 className='text-[rgb(36,36,36)] text-[16px] border-b border-[#E5E5E5] truncate'> <strong>{user.first_name + " " + user.last_name}</strong> </h2>
                            <div className='flex gap-1'>
                                <button onClick={()=>deleteMovies(user.id)} className='text-white bg-red-500'><IconTrashFilled/></button>
                                <button onClick={()=>handleUpdateUser(user)} className='bg-[#BDBDBD]'><IconEdit/></button>
                            </div>
                            
                        </header>
                        <section >
                            <ul>
                                <li className='grid grid-cols-2 p-3 gap-2 text-[12px]'>
                                    <span className='text-[#D3D3D3]'>Email</span>
                                    <span className='text-[#D3D3D3]'>Birthay</span>
                                    <span className='text-[#FFFFFF]'>{user.email}</span>
                                    <span className='text-[#FFFFFF]'>{user.birthday} </span>
                                </li>
                            </ul>
                        </section>
                    </article>
                </section>

            ))}
             
        </section>

    )
}

export default UserList