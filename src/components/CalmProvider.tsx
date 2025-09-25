"use client";
import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext<{calm:boolean; toggle:()=>void}>({calm:false, toggle:()=>{}});
export function useCalm(){ return useContext(Ctx); }

export default function CalmProvider({children}:{children:React.ReactNode}){
  const [calm, setCalm] = useState(false);
  useEffect(()=>{ const v = localStorage.getItem("calm"); setCalm(v==="1"); },[]);
  useEffect(()=>{ document.documentElement.dataset.calm = calm ? "true" : "false"; localStorage.setItem("calm", calm?"1":"0"); },[calm]);
  return <Ctx.Provider value={{calm, toggle:()=>setCalm(v=>!v)}}>{children}</Ctx.Provider>;
}
