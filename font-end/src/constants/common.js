import { createContext, useEffect, useState } from "react";
import categoryApi from "../api/categoryApi";

export const BASEURLHOST = "https://api.ezfrontend.com";
export const THUMBNAIL_PLACEHOLDER =
  "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
export const IMGBANNERS = {
  imgID1:
    "https://images7.alphacoders.com/133/1338193.png",
  imgID2:
    "https://images7.alphacoders.com/133/1338193.png",
  imgID3:
    "https://images7.alphacoders.com/133/1338193.png",
};

export const BLOGCONTENTS = {
  id: 1,
  imgs: "https://file.hstatic.net/200000454999/article/snapedit_1706866990105_efc0d2d565d24f54b57cf1bf865f897f_small.png",
  description: "Sách mới hay nhất 2024",
  date: "03/01/2024",
};

export const CategoryContext = createContext();

// Tạo Provider
export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getProucts();
        // console.log("cateee", list);
        setCategories(list);
      } catch (error) {
        console.log("Failed to fetch category list", error);
      }
    })();
  }, []);
  return (
    <CategoryContext.Provider value={categories}>
      {props.children}
    </CategoryContext.Provider>
  );
};
