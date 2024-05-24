import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleCodeChange = () => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  };

  return (
    <div
      className={`App bg-${theme === "light" ? "light" : "dark"} text-${
        theme === "light" ? "dark" : "light"
      }`}
    >
      <Header onThemeChange={handleThemeChange} />
      <main className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <h2 class="text-danger">HTML</h2>
              <textarea
                className={`form-control shadow-${
                  theme === "light" ? "sm" : "md"
                }`}
                value={htmlCode}
                onChange={(e) => {
                  setHtmlCode(e.target.value);
                  handleCodeChange();
                }}
                rows="10"
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#333",
                  color: theme === "light" ? "#333" : "#fff",
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h2 class="text-info">CSS</h2>
              <textarea
                className={`form-control shadow-${
                  theme === "light" ? "sm" : "md"
                }`}
                value={cssCode}
                onChange={(e) => {
                  setCssCode(e.target.value);
                  handleCodeChange();
                }}
                rows="10"
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#333",
                  color: theme === "light" ? "#333" : "#fff",
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h2 class="text-warning">JavaScript</h2>
              <textarea
                className={`form-control shadow-${
                  theme === "light" ? "sm" : "md"
                }`}
                value={jsCode}
                onChange={(e) => {
                  setJsCode(e.target.value);
                  handleCodeChange();
                }}
                rows="10"
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#333",
                  color: theme === "light" ? "#333" : "#fff",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="bg-light p-3" style={{ height: "50vh" }}>
              <iframe
                srcDoc={srcDoc}
                title="Output"
                sandbox="allow-scripts"
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
