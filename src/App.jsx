import { useEffect, useState } from "react";
import Modal from "./component/Modal";
import axios from "axios";
import { useForm } from "react-hook-form";
import UserList from "./component/UserList";
import UserCard from "./component/UserCard";


function App() {
  const [showmessagedelete, Setshowmessagedelete] = useState(false)
  const [users, setusers] = useState([])
  const [showmodal, Setshowmodal] = useState(false)
  const [usertoedit, setUsertoedit] = useState(null)
  const baseUrl = "https://users-crud.academlo.tech"
  const { register, handleSubmit, reset } = useForm()

  const handleUserCard=()=>{
    showmessagedelete(false)
  }

  const HandleModal = () => {
    Setshowmodal(true)
  }
  const handleCloseModal = () => {
    Setshowmodal(false)
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
      image_url: ""
    })
    setUsertoedit(null)
  }

  const handleUpdateUser = (user) => {
    HandleModal()
    setUsertoedit(user)
  }

  const createUser = (newUser) => {
    axios
      .post(baseUrl + "/users/", newUser)
      .then(({ data: newUser }) => {
        setusers([...users, newUser])
        handleCloseModal()
      })
      .catch((err) => console.log(err));
  };

  const deleteMovies = (iduser) => {
    axios
      .delete(baseUrl + `/users/${iduser}`)
      .then(() => {
        const newUsers = users.filter(
          (users) => users.id != iduser
        );
        setusers(newUsers)
      })
      .catch((err) => console.log(err));
  }

  const updateUser = (user) => {
    axios
      .put(baseUrl + `/users/${user}`)
      .then(() => {
        const newUsers = users.map(() => { });
        setusers(newUsers)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(baseUrl + "/users/")
      .then(({ data }) => setusers(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (usertoedit != null) {
      reset(usertoedit)
    }
  }, [usertoedit])

  return (
    <main className="bg-[url('/fondo.jpg')] bg-no-repeat bg-cover grid items-center justify-center gap-4 p-10 h-screen">
      <h1 className="text-center p-2 font-bold text-white">
        List of user
      </h1>
      <button onClick={HandleModal} className="bg-[#CBFFDA]  p-2 m-[0_auto] rounded-md">create new user</button>

      <div className={`w-full text-center text-white ${users != "" ? "hidden" : "visible"}`}>
        <img className="m-[0_auto] mb-10" src="/imagen.png" alt="" />
        <span>You don't have any users on your list. Create a new user</span>
      </div>

      <Modal
        showmodal={showmodal}
        closeModal={handleCloseModal}
        handleSubmit={handleSubmit}
        register={register}
        createUser={createUser}
        isToEdit={!!usertoedit}
        updateUser={updateUser}
      />
      <UserList
        users={users}
        deleteMovies={deleteMovies}
        handleUpdateUser={handleUpdateUser}
      />
     <UserCard showmessagedelete={showmessagedelete}/>
    </main>

  );
}

export default App;
