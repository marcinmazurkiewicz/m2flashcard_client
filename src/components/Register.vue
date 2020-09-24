<template>
  <div class="form-wrapper">
        <form>
            <div class="form-group">
                <label for="userEmail">Adres email</label>
                <input type="email" class="form-control" id="userEmail">
            </div>
            <div class="form-group">
                <label for="userPassword">Hasło</label>
                <input type="password" class="form-control" id="userPassword">
            </div>
            <div class="form-group">
                <label for="userPasswordConfirm">Potwierdź hasło</label>
                <input type="password" class="form-control" id="userPasswordConfirm">
            </div>
          
            <button type="submit" class="btn btn-primary">Zarejestruj</button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
}
</script>

<style>
    .form-wrapper {
        padding-top: 24px;
        grid-area: 2 / 2 / 5 / 5;
    
    }
    
</style>
