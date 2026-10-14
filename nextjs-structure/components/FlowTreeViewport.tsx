"use client";

import { useEffect, useRef } from "react";
import ClinicalFlowTree from "./ClinicalFlowTree";

export default function FlowTreeViewport() {
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = viewport.current;
    if (node && node.scrollWidth > node.clientWidth) {
      node.scrollLeft = (node.scrollWidth - node.clientWidth) / 2;
    }
  }, []);

  return <><div ref={viewport} className="flow-tree-viewport" role="region" aria-label="Connected hospital workflow diagram; scroll to explore" tabIndex={0}><ClinicalFlowTree /></div><p className="flow-scroll-hint">Scroll to explore the full care flow ↓</p></>;
}
