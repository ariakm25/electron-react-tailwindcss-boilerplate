import * as customTitlebar from "custom-electron-titlebar";

window.addEventListener("DOMContentLoaded", () => {
  const titleBar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex("#EBECF5"),
    titleHorizontalAlignment: "left",
  });
});
