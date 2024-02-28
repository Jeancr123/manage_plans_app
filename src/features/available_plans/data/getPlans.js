const getPlans = async (onNext) => {
    // Fetch data from the REST API
    fetch("/plans")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        onNext(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  export default getPlans;