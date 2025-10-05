import { useReactToPrint } from "react-to-print";


export function useSaveCv({ targetRef, fileName, onAfterSave }) {
  if (!targetRef) {
    console.warn("SaveCV: targetRef is missing; printing will be skipped.");
  }

  return useReactToPrint({
    contentRef: targetRef,
    documentTitle: fileName,
    onAfterPrint: onAfterSave,
  });
}

export default useSaveCv;
