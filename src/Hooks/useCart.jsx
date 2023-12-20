import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  const axiosPublic = useAxiosPublic();

  const { data: cart = [], refetch: cartRefetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cart");
      return res.data;
    },
  });

  return [cart, cartRefetch];
};

export default useCart;
