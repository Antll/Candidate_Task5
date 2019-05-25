<template>
    <div>
        <form>
            <label for="login">Your login</label>
            <input type="text" name="userlogin">

            <label for="userpassword">Your password</label>
            <input type="password" name="newpassword">

            <label for="checkpassword">Retype password</label>
            <input type="password" name="checkpassword">

            <input class="btn" type="submit" value="Sign Up">
        </form>
    </div>
</template>

<script>
export default {
  name: 'Register',
};
</script>

<style>
form {
    margin: 50px auto;
    width: 200px;
}

label {
    color: #FFFFFF;
}

input {
    margin-bottom: 10px;
}

.btn {
    display: block;
    margin-left: 8%;
    margin-top: 10px;
    width: 90%;
}
</style>
