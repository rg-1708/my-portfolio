import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";


export function useSectionInView( sectionName: SectionName, threshold = 0.75 ){
    const { ref, inView } = useInView({
        threshold,
      });
      const { timeOfLastClick, setActiveSection } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, timeOfLastClick, sectionName]);

      return {
        ref
    };
}