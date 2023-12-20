import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMobiles = () => {
  const axiosPublic = useAxiosPublic();

  const { data: mobiles = [], refetch: mobilesRefetch } = useQuery({
    queryKey: ["mobiles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/mobiles");
      return res.data;
    },
  });

  return [mobiles, mobilesRefetch];
};

export default useMobiles;
