<template>
  <div class="columns">
    <div class="column column-is-fullheight">
      fezfefze
    </div>
    <div class="column column-is-fullheight">
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="field">
              <label for="email" class="label">Name</label>
              <div class="control">
                <input id="email" class="input flat-input" type="text" placeholder="Text input">
              </div>
            </div>

            <div class="field">
              <label for="password" class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input id="password" class="input flat-input is-success" type="text" placeholder="Text input" value="bulma">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p class="help is-success">This username is available</p>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="question">
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" name="question">
                  No
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="flat-shadow-button">Submit</button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "register"
}
</script>

<style lang="scss" scoped>
.column-is-fullheight {
  height: 100vh;
}
</style>
