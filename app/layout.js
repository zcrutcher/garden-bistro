import Header from "./Header";
import "./global.scss";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </body>
    </html>
  );
}
