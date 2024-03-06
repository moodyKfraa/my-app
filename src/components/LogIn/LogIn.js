import supabase from '../SupaBase'
import toast from '../Toast/Toast';
async function LogIn(email, password,getUserEmail,closePortal) {
    let logInError ;

        await supabase.auth.signInWithPassword({email:email, password:password})
        .then(userData => {
                if(userData.error){logInError = userData.error.message}
                if(userData.data.user){logInError=null ; getUserEmail(email)}
        })
        if(logInError){toast(logInError)}
        else{
        closePortal();
        toast("Logged In")
        }

}

export default LogIn