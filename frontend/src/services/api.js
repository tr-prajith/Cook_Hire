import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// Customer Inquiry
export const submitInquiry = async (inquiryData) => {
  const res = await API.post("/inquiry", inquiryData);
  return res.data;
};

// Cook Registration
export const registerCook = async (cookData) => {
  const res = await API.post("/cooks", cookData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

//  Fetch The Registered cooks list
export const getCooks = async () => {
  const res = await API.get("/cooks");
  return res.data;
};