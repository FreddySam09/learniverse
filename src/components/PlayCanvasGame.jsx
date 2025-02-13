import React, { useEffect, useRef, useState } from "react";

const PlayCanvasGame = () => {
  const gameContainerRef = useRef(null); // Reference for the game container
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Load PlayCanvas game after component mounts
    const loadGame = () => {
      // Ensure the PlayCanvas container is available
      if (!gameContainerRef.current) {
        console.error("Game container not found!");
        return;
      }

      // Inject game HTML structure into the container
      gameContainerRef.current.innerHTML = `
        <canvas id="application-canvas" width="100%" height="100%"></canvas>
      `;

      // Dynamically load the PlayCanvas engine
      const playCanvasScript = document.createElement("script");
      playCanvasScript.src = "/playcanvas/playcanvas-stable.min.js";
      playCanvasScript.onload = () => {
        // Load PlayCanvas settings and start script
        loadSettingsAndStartGame();
      };
      document.body.appendChild(playCanvasScript);
    };

    const loadSettingsAndStartGame = () => {
      // Load config.json
      fetch("/playcanvas/config.json")
        .then((response) => response.json())
        .then((config) => {
          // Initialize PlayCanvas application
          const canvas = document.getElementById("application-canvas");
          const app = new pc.Application(canvas, {
            mouse: new pc.Mouse(canvas),
            touch: new pc.TouchDevice(canvas),
          });

          app.start();

          // Load assets from config
          app.configure(config);

          // Preload and start the app
          app.preload(() => {
            app.loadSceneHierarchy(config.scenes[0].url, () => {
              setLoading(false); // Hide loading screen once game starts
            });
          });
        })
        .catch((error) => console.error("Error loading config.json:", error));
    };

    loadGame();
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Loading screen */}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>Loading...</div>
        </div>
      )}

      {/* Game container */}
      <div
        ref={gameContainerRef}
        style={{ width: "100%", height: "100%", display: loading ? "none" : "block" }}
      />
    </div>
  );
};

export default PlayCanvasGame;
