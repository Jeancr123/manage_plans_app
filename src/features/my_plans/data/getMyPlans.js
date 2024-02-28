const getMyPlans = (onNext) => {
    const token = sessionStorage.getItem("jwtToken");
    fetch("/get_purchased_plans", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.plans)
        onNext(data.plans)
      })
      .catch((error) => console.error("Error fetching data:", error));
}

export default getMyPlans;