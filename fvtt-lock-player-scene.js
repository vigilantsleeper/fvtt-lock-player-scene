Hooks.on("init", () => {

  // Only apply this rule for your broadcaster user
  if ( game.user.name !== "camera" ) return;

  // Patch the Scene#_onActivate function
  const defaultOnActivate = Scene.prototype._onActivate;
  Scene.prototype._onActivate = function(active) {
    // Prevent activating any scene except your green-screen one
    if ( this.name !== "diceroll" ) return;
    return defaultOnActivate(active);
  }
});
