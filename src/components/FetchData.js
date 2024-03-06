import supabase from "./SupaBase";
import toast from "./Toast/Toast";

async function FetchData(user ,getData) {

    await supabase.from("Users").select("notes").eq("user" , user)
        .then((data)=>{
            if(data){
                if(data.error){toast(data.error.message)}
                else if(data.data.length===0){toast("Couldn't Find User Data")}
                else{getData(data.data[0].notes);}
            }
        })
     
}

export default FetchData