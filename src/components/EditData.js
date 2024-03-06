import supabase from "./SupaBase";
import toast from "./Toast/Toast";

async function EditData(user,Data,type, payload) {
    if(type === "add") {
        await supabase.from("Users").update({notes:[payload, ...Data]}).eq("user",user).select().then(data=>{
            if(data.error){toast(data.error.message)}
            else{toast("The Note Has Been Added")}
        })
    }

    else if(type === "delete") {
        await supabase.from("Users").update({notes:Data.filter((el,i)=>i!== payload)}).eq("user",user).select().then(data=>{
            if(data.error){toast(data.error.message)}
            else{toast("The Note Has Been Deleted")}
        })
    }

    else if(type === "deleteAll") {
        await supabase.from("Users").update({notes:[]}).eq("user",user).select().then(data=>{
            if(data.error){toast(data.error.message)}
            else{toast("All Notes Has Been Deleted")}
        })
    }
  
}

export default EditData