<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand to="#">IT-Jobs</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/companies" >Companies</b-nav-item>
        <b-nav-item to="/User" >Users</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="success">Search</b-button>
        </b-nav-form>

        

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#nav{
    padding: 0;
}
#nav a{
    color: white;
}
#nav a.router-link-exact-active{
    color: blue;
}
.b-nav-item-dropdown{
    color: white;
}
em{
    color: white;
}
</style>