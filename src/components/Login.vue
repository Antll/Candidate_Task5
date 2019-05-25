<template>
    <div>
        <form>
            <label for="login">Your login</label>
            <input type="text" name="userlogin">

            <label for="userpassword">Your password</label>
            <input type="password" name="newpassword">

            <input class="btn" type="submit" value="Sign Up">
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style>
</style>
