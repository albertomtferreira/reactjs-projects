import { useState } from "react";
import "./qr_code_component.styles.css";
import QRCode from "react-qr-code";

export default function QrCodeComponent() {
  // State management
  const [qrCode, setQrCode] = useState("QR CODE GENERATOR");
  const [input, setInput] = useState("");
  // Function to handle the onClick status from the Generate button
  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="qr_code_container">
      <div className="qr_code_input">
        {/* INPUT */}
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        {/* SUBMIT */}
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="qr_code_generator">
        {/* QR CODE GENERATOR */}
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
