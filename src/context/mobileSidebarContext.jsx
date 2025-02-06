  import { createContext, useState, useContext} from 'react';

  const MobileSidebarContext = createContext({
    isMobileSidebarOpen: false,
    openMobileSidebar: () =>{},
    closeMobileSidebar: () =>{}
  });

  export function MobileSidebarProvider({children}){
    const [isMobileSidebarOpen,setIsMobileSidebarOpen] = useState(false);
    const openMobileSidebar = () => setIsMobileSidebarOpen(true);
    

    const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

    return <MobileSidebarContext.Provider value={{isMobileSidebarOpen,openMobileSidebar,closeMobileSidebar}}>{children}</MobileSidebarContext.Provider>
  }

  export function useMobileSidebar(){
    return useContext(MobileSidebarContext);
  };

