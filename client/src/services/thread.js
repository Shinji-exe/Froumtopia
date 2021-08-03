import api from "./apiConfig";

export const getThreads = async () => {
  try {
    const res = await api.get("/threads");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createThread = async (input) => {
  try {
    const res = await api.post("/create-thread", input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getThread = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateThread = async (id, thread) => {
  try {
    const res = await api.put(`/posts/${id}`, thread);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteThread = async (id) => {
  try {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}