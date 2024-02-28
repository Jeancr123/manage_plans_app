import apiUrl from "../../../utils/apiConnection";

const handlePurchase = async (product, handleContinue, setError) => {
    try {
      const token = sessionStorage.getItem("jwtToken");

      const response = await fetch(apiUrl + "/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          planId: product.id,
        })
      });

      if (response.ok) {
        alert("Purchase successful!");
        handleContinue();
      } else {
        const data = await response.json();
        setError(data.message || "Purchase failed");
        handleContinue();
      }
    } catch (error) {
      console.error("Error during purchase:", error);
      setError("Error purchasing. Try again!");
      handleContinue();
    }
  };

  export default handlePurchase;