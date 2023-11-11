import axios from "axios";

export const useGetClasses = async () => {
  const res = await fetch("http://localhost");

  if(!res.ok){
    throw new Error("Failed to fetch classes")
  }
  // if(res.status !== 200) {
  //   throw new Error("Failed to fetch classes")
  // }

  return res.json()
};
