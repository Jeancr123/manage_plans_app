import apiUrl from "../../../utils/apiConnection";

const authenticate = async (user, onNext, setError) => {
  
    try {
        const response = await fetch(apiUrl + "/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.username,
            password: user.password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          sessionStorage.setItem("jwtToken", data.token);
          onNext();
        } else {
          const data = await response.json();
          setError(data.message || "Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
        setError("Error logging in. Try again!");
      }
}

export default authenticate;