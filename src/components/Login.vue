<template>
    <div id="loginPage">
        <center>
        <p>Login in Todo</p>
        <div id="btns">
            <div>
                <b-button id="btn-facebook" variant="success" @click="with_Facebook">Facebook</b-button>
            </div>

            <div>
                <g-signin-button  
                        :params="googleSignInParams" 
                        @success="onGoogleSignInSuccess"
                >
                <b-button variant="success" id="btn-google">
                    Google Signin
                </b-button>
                </g-signin-button>
            </div>

        </div>
        </center>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            googleSignInParams: {
                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'
            }
        }
    },
    methods: {
        onGoogleSignInSuccess (response) {
            const token = response.Zi.access_token
            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {
                access_token: token
            })
            .then(() => {
                this.$router.push('/')
            })
        },
        with_Facebook() {
            let access_token = FB.getAuthResponse()['accessToken']
            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {
                'access_token': access_token
            })
            .then(() => {
                this.$router.push('/')
            })
        },
        connectToFacebook() {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            window.fbAsyncInit = function() {
                FB.init({
                    appId: '1498914273473730',
                    xfbml: true,
                    version: 'v2.8',
                })
                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                         console.log('---connected---')
                    } else if (response.status === 'not_authorized') {
                        console.log('<----------->not_authorized')
                    } else {
                        console.log('<----------->else')
                    }
                })
            }
        }
    },
    created() {
        this.connectToFacebook()
    }
}
</script>

<style scoped>
#btns div {
    display: inline-block;
}
#btn-facebook {
    width: 150px;
    background: #4463A4;
}
#btn-google {
    width: 150px;
    background: #EA4335;
}
</style>