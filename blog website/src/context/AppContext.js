import { createContext, useState } from "react";

export const AppContext = createContext();
function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(null);

  const value = {
    loading,
    posts,
    page,
    totalPages,
    setposts,
    setloading,
    setpage,
    settotalPages,
  };

  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
  async function fetchPosts() {
    try {
      let url = `${baseUrl}?pg=${page}`;
      setloading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setpage(data.page)
    } catch (error) {
      console.log("404", error);
    }
  }
  fetchPosts()
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
