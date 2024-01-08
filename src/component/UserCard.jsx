import React from 'react'

const UserCard = (showmessagedelete) => {
  
   return (
    <div className={`absolute w-full flex justify-center items-center ${showmessagedelete? "invisible": "visible"}`}>
      <article className={`absolute h-[200px] w-[400px] bg-[#3C3C3D] grid gap-3 p-3 rounded-xl border-solid  justify-center items-center shadow-[0_20px_40px_5px_rgba(0,0,0,0.5)]`}>
        <h2 className='text-[#FFF] font-extrabold'>
          Are you sure you want to delete this user?
        </h2>
        <div className='grid justify-center items-center'>
          <button onClick={() => deleteMovies(user.id)} className=' w-[150px] font-[36px] bg-[#D85D5D]' >Yes, delete</button>
          <button onClick={()=>handleUserCard}>Or cancel</button>
        </div>

      </article>
    </div>

  )
}

export default UserCard