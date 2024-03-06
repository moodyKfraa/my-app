function toast(msg){
    const pretoast = document.getElementsByClassName("toast")[0]
    const toast = document.createElement('div'); 
    toast.className = 'toast';
    const toastMsg = document.createElement('p');
    toastMsg.innerText = msg;
    toast.appendChild(toastMsg);
    
    if(pretoast){
        pretoast.remove()
    }
    document.body.appendChild(toast);
    setTimeout(()=>{
        if(document.getElementsByClassName("toast")[0]){document.getElementsByClassName("toast")[0].remove()}
    },5000)
}

export default toast