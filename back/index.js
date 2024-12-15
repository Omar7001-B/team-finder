// ... existing imports and setup code ...

// Add this route before other routes
app.get("/", (req, res) => {
  res.json({
    message: "Team Finder API is running",
    status: "active",
    version: "1.0.0",
  });
});

// ... rest of your server code ...
