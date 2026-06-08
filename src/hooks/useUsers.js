import { useCallback, useEffect, useState } from "react";
import { authHeaders } from "../auth";
import { API_URL } from "../config";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getUsers = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/users`, {
        headers: authHeaders(),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Error al obtener usuarios");
      }

      setUsers(data);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const createUser = async (userData) => {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(),
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || "Error al crear usuario");
    }

    setUsers((currentUsers) => [...currentUsers, data]);
    return data;
  };

  const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || "Error al eliminar usuario");
    }

    setUsers((currentUsers) => currentUsers.filter((user) => user._id !== id));
    return data;
  };

  return {
    users,
    loading,
    error,
    setError,
    createUser,
    deleteUser,
    refreshUsers: getUsers,
  };
}

export default useUsers;
