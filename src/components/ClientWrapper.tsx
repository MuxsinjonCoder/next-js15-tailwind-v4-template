// "use client";

// import { useGetUserById } from "@/queries/user";
// import { useUser } from "@/context/UserContext";

// export default function ClientWrapper() {
//   const storedUser =
//     typeof window !== "undefined" ? localStorage.getItem("userData") : null;
//   const parsedUser = storedUser ? JSON.parse(storedUser) : null;
//   const userId = parsedUser?.data?.id;
//   const { setUser } = useUser();

//   const { data, isLoading, isError, error } = userId
//     ? useGetUserById(userId)
//     : { data: null, isLoading: false, isError: false };

//   if (data) {
//     setUser(data);
//     // Update localStorage with new data
//     localStorage.setItem("userData", JSON.stringify(data));
//   }

//   if (isLoading) {
//     console.log("Loading user data...");
//   } else if (isError) {
//     console.log("Error fetching user data:", error);
//   }

//   return null;
// }