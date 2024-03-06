import supabase from "../SupaBase"
import toast from "../Toast/Toast"

 async function SignOut () {
    await supabase.auth.signOut().then(data=>{
        if(!data.error){
            toast("logged Out")
        }else{toast(data.error.message)}
    }
    )
 }
export default SignOut