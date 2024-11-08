<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" @click="submit">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be at least 6 characters',
      ],
    };
  },
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        // Handle form submission
        //alert(`Email: ${this.email}, Password: ${this.password}`);
        try {
          const response = await axios.post('http://localhost:8080/auth/login', {
            username: this.username,
            password: this.password,
          });
          const token = response.data; // Assuming the token is returned directly
          // Store the token in local storage
          localStorage.setItem('jwtToken', token);
          
          // Optionally, redirect the user to a different page
          // this.$router.push('/dashboard'); // Change '/dashboard' to your desired route
          
          // Optionally, also set a global state (if using Vuex or similar)
          // this.$store.commit('setUser ', { username: this.username, token });
          
          // Show a success message or perform any other actions
          this.$toast.success('Login successful!');
        } catch (error) {
          // Handle error (e.g., invalid credentials)
          this.$toast.error('Login failed. Please check your credentials.');
        }
      }
    },
    logout() {
        localStorage.removeItem('token');
        // Redirect to login page or update UI
    }
    // will implement this logic for next logics soon....
    // async fetchData() {
    //         try {
    //             const response = await http.get('/api/protected-resource');
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             // Handle error (e.g., show a notification)
    //         }
    // }
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>