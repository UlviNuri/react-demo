import React, { useState } from "react";
import "../navbar/navbar.css";



const Navbar = () => {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [loginUser, setLoginUser] = useState()

  console.log(loginUser);

  const LoginClick = () => {
    const result = Users.filter(user => user.name == login && user.password == password)
    setLoginUser(result)

  }

  var Users = [
    {
      id: 1,
      name: "Ulvi",
      surname: "Nuriyev",
      age: 23,
      password: "ulvi666",
    },
    {
      id: 2,
      name: "Pervin",
      surname: "Qasimli",
      age: 23,
      password: "qaimli85",
    },
    {
      id: 3,
      name: "Ulvi",
      surname: "Nuriyev",
      age: "23",
      password: "salam123",
    },
    {
      id: 4,
      name: "Ulvi",
      surname: "Nuriyev",
      age: "23",
      password: "salam1234",
    },
    {
      id: 5,
      name: "Ulvi",
      surname: "Nuriyev",
      age: "23",
      password: "salam1234",
    },
    {
      id: 6,
      name: "Ulvi",
      surname: "Nuriyev",
      age: "23",
      password: "salam1234",
    },
    {
      id: 7,
      name: "Ulvi",
      surname: "Nuriyev",
      age: "23",
      password: "salam1234",
    },
    {
      id: 8,
      name: "Ulvi2",
      surname: "Nuriyev",
      age: "23",
      password: "salam1234",
    },

    {
      id: 9,
      name: "Ulvi",
      surname: "Nuriyev",
      age: "23",
      password: "salam1234",
    },
    {
      id: 10,
      name: "Ulvi",
      surname: "Nuriyev",
      age: "23",
      password: "salam1234",
    },
    {
      id: 11,
      name: "Ilham",
      surname: "Bagirov",
      password: "parol123"
    }
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <form action="">
              <label htmlFor="#">Name</label>
              <input onChange={(e) => setLogin(e.target.value)} id="name" type="text" placeholder="Enter the name" />
              <label htmlFor="#">Enter the pasword </label>
              <input onChange={(e) => setPassword(e.target.value)} id="password" type="text" placeholder="Enter the password" />
            </form>
            <button onClick={() => LoginClick()} id="login" type="submit">Login</button>
            {loginUser?.map((user) => (

              <p>xos geldin {user?.name + user?.surname}</p>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
