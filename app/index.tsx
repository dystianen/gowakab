import WebView from "react-native-webview";

export default function Index() {
  return (
    <WebView
      source={{ uri: "https://gowakab.go.id/site/" }}
      setBuiltInZoomControls={false}
      setDisplayZoomControls={false}
      style={{ flex: 1 }}
    />
  );
}
