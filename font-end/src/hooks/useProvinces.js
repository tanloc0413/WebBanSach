import { useEffect, useState } from "react";

export default function useProvinces() {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    // Fetch dữ liệu từ file JSON
    fetch("/utils/json/provinces.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Lọc chỉ lấy các đối tượng có "Type": "province"
        const filteredProvinces = data
          .filter((item) => item.Type === "province")
          .map((item) => ({
            FullName: item.FullName,
            Code: item.Code,
          }));
        setProvinces(filteredProvinces);
      })
      .catch((error) => console.error("Error fetching the provinces:", error));
  }, []);

  return provinces;
}
