import supabase from '../SupaBase.js'
import toast from '../Toast/Toast.js'
async function SignUp(email, password,closePortal) {
    let userEmail ;
    let signUpError ;

        await supabase.auth.signUp({email: email, password: password})
        .then(userData => {
            if(userData.data.user){userEmail = userData.data.user.email}
            if(userData.error){signUpError = userData.error.message}
        })
        if(userEmail && !signUpError){
        await supabase.from("Users").insert([{user: userEmail , notes:[]}])
        closePortal()
        toast("A Confirmation Link Sent To Your E-mail")
    }
                                    
        if(signUpError){toast(signUpError)}
}

export default SignUp