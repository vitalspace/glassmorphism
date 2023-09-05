// @ts-nocheck
const copyClipBoard = (typeContent: [], activeTabValue:string, e:Event) => {
    e.target.textContent = "Copied"   
    setTimeout(() => {
      e.target.textContent = "Copy"   
    }, 2000);

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