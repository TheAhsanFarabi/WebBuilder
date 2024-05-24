import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
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
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div>
      <Header />
      <main className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <h2>HTML</h2>
              <textarea
                className="form-control"
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                rows="10"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h2>CSS</h2>
              <textarea
                className="form-control"
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                rows="10"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <h2>JavaScript</h2>
              <textarea
                className="form-control"
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                rows="10"
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
