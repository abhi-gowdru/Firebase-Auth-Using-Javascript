import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, deleteUser, updatePassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'

function _0x8ee3(_0x42820a,_0x36ed9e){const _0x521e37=_0x521e();return _0x8ee3=function(_0x8ee37b,_0x97b756){_0x8ee37b=_0x8ee37b-0xaf;let _0x1891f1=_0x521e37[_0x8ee37b];return _0x1891f1;},_0x8ee3(_0x42820a,_0x36ed9e);}const _0x276a9d=_0x8ee3;(function(_0x18b5ca,_0xeb2fab){const _0x330225=_0x8ee3,_0x59847c=_0x18b5ca();while(!![]){try{const _0x10bbc4=-parseInt(_0x330225(0xb7))/0x1*(-parseInt(_0x330225(0xbb))/0x2)+-parseInt(_0x330225(0xb9))/0x3+-parseInt(_0x330225(0xb3))/0x4+parseInt(_0x330225(0xb0))/0x5+parseInt(_0x330225(0xba))/0x6*(-parseInt(_0x330225(0xaf))/0x7)+parseInt(_0x330225(0xb8))/0x8*(-parseInt(_0x330225(0xbd))/0x9)+parseInt(_0x330225(0xb2))/0xa;if(_0x10bbc4===_0xeb2fab)break;else _0x59847c['push'](_0x59847c['shift']());}catch(_0x577508){_0x59847c['push'](_0x59847c['shift']());}}}(_0x521e,0x1cf49));const firebaseConfig={'apiKey':_0x276a9d(0xb6),'authDomain':'fir-javascript-b5efe.firebaseapp.com','projectId':_0x276a9d(0xb4),'storageBucket':_0x276a9d(0xb5),'messagingSenderId':_0x276a9d(0xb1),'appId':'1:928939334435:web:040683ac74b48bf857ca96','measurementId':_0x276a9d(0xbc)};function _0x521e(){const _0x1c5123=['50440PfERPI','928939334435','5946040aYXmmY','623452fhWkYt','fir-javascript-b5efe','fir-javascript-b5efe.appspot.com','AIzaSyC6pCjKdKSbeNnl9ZwYWRbgdggvKOSEkQ8','25IYHFxT','119864kAlDES','396411TGJpHL','6kYJZuk','5872gMscSr','G-NCYX6GF938','126UUEtlQ','432103MYfMQI'];_0x521e=function(){return _0x1c5123;};return _0x521e();}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const usr_email = document.getElementById('user_email');
const usr_passwd = document.getElementById('user_passwd');

export async function logIn() {
    await signInWithEmailAndPassword(auth, usr_email.value, usr_passwd.value)
        .then((userCredential) => {
            const user = userCredential.user;
            Swal.fire({
                icon: 'success',
                title: 'Login Successfully',
                text: user.email
            })
            location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorCode
            })
        });
}

export async function signUp() {
    await createUserWithEmailAndPassword(auth, usr_email.value, usr_passwd.value)
        .then((userCredential) => {
            const user = userCredential.user;
            Swal.fire({
                icon: 'success',
                title: 'Account Created Successfully',
                text: user.email
            })
            location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorCode
            })
        });
}

export async function checkBeforeAuth() {
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            location.href = "dashboard.html";
        }
    });
}

export async function checkAfterAuth() {
    await onAuthStateChanged(auth, (user) => {
        if (!user) {
            location.href = "index.html";
        } else {
            if (user.emailVerified === true) {
                document.getElementById("emailverifybtn").style.display = "none";
            }
            document.getElementById("profile_email").innerHTML = "Welcome! " + user.email;
        }
    });
}

export async function logOut() {
    await signOut(auth).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Logout Successfully'
        })
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error
        })
    });
}

export async function resetPassword() {
    await sendPasswordResetEmail(auth, usr_email.value)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Password Reset Email Sent Successfully',
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: 'ok',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "index.html";
                }
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorCode
            })
        });
}

export async function delUser() {
    const user = auth.currentUser;
    await deleteUser(user).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'User Deleted Successfully'
        })
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error
        })
    });
}

export async function changePassword() {
    const user = auth.currentUser;
    await updatePassword(user, usr_passwd.value).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Password Changed Successfully'
        })
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error
        })
    });
}

export async function emailVerify() {
    const auth = getAuth();
    const emailcheck = auth.currentUser.emailVerified;
    if (emailcheck === false) {
        await sendEmailVerification(auth.currentUser).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'E-mail Verification Send Successfully'
            })
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
            })
        });
    }
}
