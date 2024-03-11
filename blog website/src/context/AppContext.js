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
async function getPosts(page=1) {
    
}

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
