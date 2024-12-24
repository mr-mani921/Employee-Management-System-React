import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashBoard/EmployeeDashboard";
import AdminDashboard from "./components/dashBoard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  //fetched the logged in user in the start if there is someone logged in then the respective dashboard will be displayed other wise login page
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
    }
  }, []);
  
  //the following function will login users by matching entered email and password's with the stored one in the local storage.
  const handleLogin = (email, password) => {
    if ( //for admin login
      authData &&
      authData.admin.email === email &&
      authData.admin.password === password
    ) {
      const adminData = { role: "admin", data: authData.admin };
      setUser(adminData);
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (authData) { //for user login
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser(employeeData);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else { //if the entered crededentials don't match with the stored one in the local storage.
        alert("Invalid Credentials");
      }
    }
  };

  return (
    // this will render the specific component according to user's role, also the setUser and userData is passed to the componets to use the userData also for logging out setUserData will be used.
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard setUser={setUser} userData={user.data} />
      ) : (
        user.role === "employee" && <EmployeeDashboard setUser={setUser} userData={user.data} />
      )}
    </>
  );
};

export default App;
