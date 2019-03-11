import Vue from 'vue';

const app = new Vue({
    el: "#form-validate",
    data: {
        errors: [],
        fullName: '',
        email: '',
        message: '',
        invalidName: false,
        invalidMail: false,
        invalidMsg: false
    },
    methods: {
        check(e) {
            e.preventDefault();
            this.errors.length = 0;
            if (!this.fullName) {
                this.errors.push('Name is rquired');
                this.invalidName = true;
            } else {
                this.invalidName = false;
            }
            if (!this.email) {
                this.errors.push('Email is required');
                this.invalidMail = true;
            } else if (!this.validateEmail(this.email)) {
                this.errors.push('Valid email is required');
                this.invalidMail = true;
            } else {
                this.invalidMail = false;
            }
            if (!this.message) {
                this.errors.push('Message is required');
                this.invalidMsg = true;
            } else {
                this.invalidMsg = false;
            }
            if (!this.errors.length) {
                alert('Form successfully sended');
            }
        },
        validateEmail: (email) => {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
});