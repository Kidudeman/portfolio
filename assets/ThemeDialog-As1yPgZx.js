import{r as c,T as m,j as e,M as d,B as i}from"./index-VnRKIq3i.js";const h=({setThemeDialogOpen:s})=>{const{theme:r,toggleTheme:l}=c.useContext(m),a=t=>()=>{l(t),s(!1)};return e.jsxs("div",{className:"border-1 absolute bottom-14 right-2 h-auto w-[95%] rounded-lg border-themePrimaryColor bg-bgColor shadow-technologiesCard sm:bottom-8 sm:w-[480px]",children:[e.jsxs("div",{className:"flex flex-row justify-between px-4 pt-2",children:[e.jsx("p",{className:"text-md font-nunito text-primaryColor",children:"Choose theme:"}),e.jsx(d,{className:"text-primaryColor hover:cursor-pointer",onClick:()=>s(!1)})]}),e.jsx("div",{className:"flex flex-row justify-center",children:Object.values(i).map((t,n)=>{const o=r===t;return e.jsx("div",{className:"px-4 py-2 text-center text-lg text-primaryColor",children:e.jsx("button",{title:"theme",onClick:a(t),disabled:o,className:`btn disabled:cursor-not-allowed ${o?"bg-themePrimaryColor":""}`,children:t})},n)})})]})};export{h as ThemeDialog,h as default};
