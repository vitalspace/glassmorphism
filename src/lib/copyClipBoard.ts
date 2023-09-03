//@ts-nocheck
const copyClipBoard = (typeContent: [], activeTabValue:string) => {
    typeContent.forEach((element) => {
      if (element.label === activeTabValue) {
        const textarea = document.createElement("textarea");
        textarea.value = element.content;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    });
  };
export {
    copyClipBoard
}