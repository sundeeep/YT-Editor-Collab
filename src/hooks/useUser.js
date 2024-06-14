import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export const useGetUsers = () => {
  return useQuery("users", async () => {
    const { data } = await api.get("/users");
    return data.data;
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (newUser) => {
      const { data } = await api.post("/users", newUser);
      return data.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, updatedUser }) => {
      const { data } = await api.put(`/users/${id}`, updatedUser);
      return data.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      await api.delete(`/users/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
};

export const useSearchUsers = (name) => {
  return useQuery(
    ["searchUsers", name],
    async () => {
      const { data } = await api.get(`/users/search?name=${name}`);
      return data.data;
    },
    {
      enabled: !!name,
    }
  );
};
