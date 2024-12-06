import Navbar from "../Feature/Navbar";

// export default function Header() {
//   return (
//     <>
//       <div className="p-4">

//       </div>
//     </>
//   );
// }

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
