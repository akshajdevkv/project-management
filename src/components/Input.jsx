export default function Input({label,textarea, ...props}){
    return <>
    <p className="flex flex-col gap-1 my-4">
         <label className="text-sm font-bold uppercase">{label}</label>
         {textarea? <textarea {...props}/> : <input {...props}/> }
    </p>
        </>
}