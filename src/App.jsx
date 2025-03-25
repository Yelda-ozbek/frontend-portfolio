import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const notify = () => {
    toast.success("Başarılı! 🎉");
  };

  return (
    <div>
      <button onClick={notify} className="bg-blue-500 text-white p-4 rounded">
        Bildirim Gönder
      </button>
      <ToastContainer />
    </div>
  );
};

export default App; // ✅ Bu satır şart!
