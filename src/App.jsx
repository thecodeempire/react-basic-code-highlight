import React, { Suspense, lazy } from "react";

const defaultCode = `
var el,ctx=vwo_$(x); /*vwo_debug log("content",".page-section--advantage-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)"); vwo_debug*/el=vwo_$(".page-section--advantage-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)"),vwo_$(".page-section--advantage-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)").each((function(){vwo_$(this).nonEmptyContents().eq(0).replaceWith(document.createTextNode("Watch your business grow while running campaigns or automations"))})),el=vwo_$(".page-section--advantage-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)");var el,ctx=vwo_$(x); /*vwo_debug log("content",".page-section--advantage-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)"); vwo_debug*/el=vwo_$(".page-section--advantage-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)"),vwo_$(".page-section--advantage-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)").each((function(){vwo_$(this).nonEmptyContents().eq(0).replaceWith(document.createTextNode("Using Omnisend’s robust email marketing features, build & automate campaigns without having to spend days figuring out how to get everything right."))})),el=vwo_$(".page-section--advantage-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)");
`;

const LazyCodeViewer = lazy(() => import("./CodeViewer.jsx"));

function App() {
  return (
    <div className="">
      <Suspense fallback={<h1>Loading...</h1>}>
        <LazyCodeViewer code={defaultCode} />
      </Suspense>
    </div>
  );
}

export default App;
